const fs = require("fs");
const path = "notlar.json";

// Dosya oluşturma veya okuma
const loadNotes = () => {
    try {
        if (!fs.existsSync(path)) {
            fs.writeFileSync(path, JSON.stringify([]));
        }
        const data = fs.readFileSync(path, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Dosya okunurken hata oluştu:", error);
        return [];
    }
};

// Notları kaydetme
const saveNotes = (notes) => {
    try {
        fs.writeFileSync(path, JSON.stringify(notes, null, 2));
    } catch (error) {
        console.error("Dosya yazılırken hata oluştu:", error);
    }
};

// Yeni not ekleme
const addNote = (content) => {
    const notes = loadNotes();
    const id = notes.length ? notes[notes.length - 1].id + 1 : 1;
    notes.push({ id, content });
    saveNotes(notes);
    console.log("Yeni not eklendi:", id, content);
};

// Notları listeleme
const listNotes = () => {
    const notes = loadNotes();
    if (notes.length === 0) {
        console.log("Henüz bir not eklenmedi.");
    } else {
        notes.forEach(note => console.log(`${note.id} - ${note.content}`));
    }
};

// Not silme
const deleteNote = (id) => {
    let notes = loadNotes();
    const filteredNotes = notes.filter(note => note.id !== Number(id));
    if (notes.length === filteredNotes.length) {
        console.log("Belirtilen ID bulunamadı.");
    } else {
        saveNotes(filteredNotes);
        console.log("Not silindi:", id);
    }
};

// Komutları işleme
const command = process.argv[2];
const argument = process.argv[3];

switch (command) {
    case "ekle":
        if (argument) addNote(argument);
        else console.log("Lütfen bir not içeriği girin.");
        break;
    case "listele":
        listNotes();
        break;
    case "sil":
        if (argument) deleteNote(argument);
        else console.log("Lütfen silinecek notun ID'sini girin.");
        break;
    default:
        console.log("Geçersiz komut. Kullanılabilir komutlar: ekle, listele, sil");
}
