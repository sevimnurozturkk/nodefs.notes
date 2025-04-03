📌 Node.js Notlar Uygulaması

Bu proje, Node.js ve fs (File System) modülünü kullanarak dosya okuma, yazma, ekleme ve silme işlemlerini gerçekleştiren basit bir komut satırı uygulamasıdır.

📌 Proje Açıklaması

Bu uygulama ile:
✅ Kullanıcıdan alınan metin bir ID ile notlar.json içine eklenir.✅ Kayıtlı notlar listelenebilir.✅ Belirli bir ID'ye sahip not silinebilir.

📌 Kullanılan Teknolojiler

Node.js

fs (File System) modülü

📌 Kullanım

1️⃣ Yeni Not Ekleme

Yeni bir not eklemek için:

node index.js ekle "Bugün hava çok güzel!"

👉 Beklenen Çıktı:

Yeni not eklendi: 1 Bugün hava çok güzel!

2️⃣ Tüm Notları Listeleme

Mevcut tüm notları listelemek için:

node index.js listele

👉 Beklenen Çıktı:

1 - Bugün hava çok güzel!

3️⃣ Belirli Bir Notu Silme

Belirli bir ID'ye sahip notu silmek için:

node index.js sil 1

👉 Beklenen Çıktı:

Not silindi: 1

📌 Örnek Dosya İçerikleri

notlar.json (Örnek İçerik)

Başlangıçta boş olmalıdır:

[]

Bir not eklendiğinde:

[
  { "id": 1, "content": "Bugün hava çok güzel!" }
]

Bir not daha eklendiğinde:

[
  { "id": 1, "content": "Bugün hava çok güzel!" },
  { "id": 2, "content": "Node.js öğreniyorum!" }
]

Bir not silindiğinde:

[
  { "id": 2, "content": "Node.js öğreniyorum!" }
]

package.json (Otomatik Oluşacak İçerik)

{
  "name": "nodejs-notlar-uygulamasi",
  "version": "1.0.0",
  "description": "Node.js ile not ekleme, listeleme ve silme işlemleri yapan CLI uygulaması.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["nodejs", "cli", "fs", "notlar"],
  "author": "Senin İsmin",
  "license": "MIT",
  "dependencies": {}
}

📌 Hata Yönetimi

Eğer notlar.json dosyası yoksa, index.js otomatik olarak oluşturur.

Geçersiz bir komut girildiğinde, terminalde uygun bir hata mesajı görüntülenir.

ID bulunamazsa, "Belirtilen ID bulunamadı." hatası döndürülür.

📌 Özet

✅ node index.js ekle "Not içeriği" → Yeni not ekler✅ node index.js listele → Notları listeler✅ node index.js sil ID → Belirtilen ID'li notu siler