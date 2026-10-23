# Fantastic Novel — เทมเพลต WMCMS

เทมเพลตสำหรับ WeimengCMS (WMCMS) สไตล์นิยาย/เว็บอ่าน รองรับ **V4.446.1257** ครบทุกโมดูล

| | |
|---|---|
| Name | Fantastic Novel |
| Author | SubMaRk |
| Version | 4.1 |
| Date | 2026-10-23 |
| Requires | WMCMS **V4.446.1257** (ใช้แท็ก/เลเบลของเวอร์ชันนี้) |
| Repo | https://github.com/SubMaRk/Fantastic-Novel |
| License | GNU GPL v3 |

## การติดตั้ง

1. คัดลอกโฟลเดอร์ `fantastic-novel/` ไปไว้ที่ `<root>/templates/fantastic-novel/`
2. ต้องมี `copyright.xml` และ `cover.jpg` อยู่ในโฟลเดอร์ — ตัวติดตั้งเทมเพลตอ่าน XML เพื่อเอา
   ชื่อ/ผู้เขียน/appid ถ้าไฟล์ไม่ครบจะติดตั้งไม่ผ่าน
3. หลังบ้าน → **จัดการเทมเพลต** → ติดตั้ง Fantastic Novel แล้วเลือกใช้งาน
   (ระบบเขียนค่า `tp4` ใน `wmcms/config/web.config.php` ให้เอง)

ถ้าติดตั้งมือ: เพิ่มแถวในตาราง `wm_templates_templates` (`templates_path = fantastic-novel`)
แล้วให้ระบบสร้าง `wmcms/config/templates.config.php` ใหม่

## โครงสร้างโฟลเดอร์

| ไฟล์ | หน้าที่ |
|---|---|
| `header/page.html` | `<head>` กลางของหน้าใหม่ทุกหน้า — title/key/desc/OG/viewport |
| `header/main.js.html` | โหลด jQuery + สลับ animate / dark-light / ฟอนต์ (จำค่าใน localStorage) |
| `header/main.css.html` | CSS กลาง 9 ไฟล์ (ฟอนต์, materialize, global, nav, responsive, fontawesome, flag-icon, aos, hover) |
| `global.body.html` | PWA/icon meta + ปิด `</head>` + เปิด `<body>` |
| `novel/nav.html` | เนวิเกเตอร์บน/ข้าง + เมนูบัญชี + modal ตั้งค่าและข้อตกลงผู้เขียน |
| `footer.global.html` | ลิงก์เพื่อนบ้าน + footer + โหลด JS กลาง + ปิด `</body></html>` |
| `<module>/*.html` | หน้าของแต่ละโมดูล (ตามชื่อที่ระบบเรียก) |
| `static/` | `css/`, `js/`, `webfonts/`, `image/`, `flags/` |
| `404.html`, `err.html` | หน้าไม่พบเนื้อหา และหน้าแจ้งข้อผิดพลาดของระบบ |

## กฎการเขียนหน้าใหม่

- WMCMS ขยาย `{header:...}` **รอบเดียว** — ห้ามใส่ `{header:...}` ซ้อนอยู่ในไฟล์ include
  (จะค้างเป็นข้อความ) ให้ใส่ในไฟล์หน้าปกติแทน
- ลำดับ include มาตรฐาน:

  ```
  {header:header/page.html}
  {header:header/main.js.html}
  {header:header/main.css.html}
  <link rel="stylesheet" href="{templates}/static/css/<หน้า>.css">
  {header:global.body.html}
  {header:novel/nav.html}
  ... เนื้อหา ...
  {header:footer.global.html}
  ```

- `footer.global.html` โหลด JS ทั้งหมดและปิด `</body></html>` เอง — หน้าใหม่จึงไม่ต้องมี
  `<script>` หรือแท็กปิดพวกนี้
- ห้ามเขียน path ตายตัวแบบ `/templates/fantastic-novel/...` ให้ใช้ `{templates}/...`
  เท่านั้น เพื่อให้เปลี่ยนชื่อโฟลเดอร์ได้

## ฟีเจอร์

- **Dark / Light** — `static/css/dark.css`, `light.css` สลับด้วย switch ในเมนู จำค่าใน `localStorage`
- **เปิด/ปิด animation** — AOS โหลดเฉพาะเมื่อผู้ใช้เปิด ช่วยเครื่องช้า
- **ปรับฟอนต์และขนาดตัวอักษร** — 9 ตระกูลฟอนต์ไทย + ขนาด, จำค่าใน `localStorage`
- **สลับภาษา ไทย/อังกฤษ** — ข้อความที่ห่อด้วย `class="trn"` จะถูกแปลด้วย
  `static/js/lang/dict.js` (122 วลี)
- **PWA** — `static/image/manifest.json` + icon หลายขนาด + `display: standalone`
  (ไม่มี service worker/offline)
- **หน้าอ่าน** — `pageguard.min.js` + `switch.read.js` (กันคัดลอก, สลับโหมดอ่าน)

## ไลบรารีที่โหลดจริง

| ไฟล์ | ที่โหลด | ใช้ทำอะไร |
|---|---|---|
| `jquery-3.6.0.min.js` | `header/main.js.html` | พื้นฐานทุกสคริปต์ |
| `aos.js` | `header/main.js.html` | animation (โหลดเมื่อผู้ใช้เปิด) |
| `materialize.min.js` / `.css` | footer / head | โครง grid, card, modal, tabs |
| `global.min.js` | footer | สคริปต์กลางของธีม |
| `lang/dict.js` | footer | ดิกชันนารีสลับภาษา |
| `yall.min.js` | footer | lazy-load รูป |
| `scrolls.js` | footer | ปุ่มเลื่อนขึ้นบน |
| `sweetalert2.all.min.js` | footer | กล่องแจ้งเตือน |
| `pageguard.min.js`, `switch.read.js` | `novel/read.html` | กันคัดลอก / โหมดอ่าน |

CSS เสริมรายหน้า: `main.index`, `novel.type`, `novel.info`, `novel.menu`, `novel.read`,
`novel.ranking`, `novel.slider`, `novel.search`, `search`

## ฟอนต์

`static/webfonts/font.css` โหลด 9 ตระกูล:
BoonJot, Fc-Lamoon, JS Toomtam, Layijimahaniyom, TF Arluck, TF Nopscript, TF Phethai,
TH Charmonman, TH Dan Vi Vek (ค่าเริ่มต้น `fc_lamoon` ขนาด 14px)

## ความครอบคลุมโมดูล

รวม **123 ไฟล์ HTML** — ครบทุก route ที่ระบบเรียก (`dtemp`) ของ V4.446.1257

| โฟลเดอร์ | ไฟล์ |
|---|---|
| `about` (3) | `about`, `tindex`, `type` |
| `app` (5) | `index`, `type`, `app`, `replay`, `search` |
| `article` (6) | `index`, `type`, `tindex`, `article`, `search`, `replay` |
| `author` (18) | `index`, `basic`, `agreement`, `apply`, `author`, `article_articlelist`, `article_articleedit`, `article_draftlist`, `article_draftedit`, `novel_novellist`, `novel_noveledit`, `novel_chapterlist`, `novel_draftlist`, `novel_draftedit`, `novel_volumeedit`, `novel_volumelist`, `novel_statistics`, `novel_income_list` |
| `bbs` (6) | `index`, `type`, `list`, `bbs`, `post`, `search` |
| `diy` (1) | `diy` |
| `down` (1) | `down` |
| `editor` (5) | `index`, `basic`, `novel`, `novel_chapter`, `novel_cover` |
| `link` (5) | `index`, `type`, `join`, `show`, `jump` |
| `message` (1) | `add` |
| `novel` (15) | `index`, `index_boy`, `index_girl`, `type`, `tindex`, `info`, `menu`, `read`, `replay`, `search`, `topindex`, `toplist` + partial `nav`, `searchbar`, `slider` |
| `picture` (6) | `index`, `type`, `tindex`, `picture`, `search`, `toplist` |
| `replay` (1) | `list` |
| `user` (31) | `home`, `basic`, `attribute`, `head`, `uppsw`, `varemail`, `apilogin`, `exit`, `msg`, `msglist`, `read_novel`, `charge`, `charge_code`, `charge_success`, `cash_apply`, `cash_list`, `fhome`, `fvistlist`, `coll_novel_coll`, `coll_novel_shelf`, `coll_novel_sub`, `fcoll_novel_coll`, `fcoll_novel_shelf`, `bind`, `sign`, `signlist`, `unsub_weixin`, `login`, `reg`, `getpsw`, `repsw` |
| `zt` (2) | `zt`, `type` |
| `header` (12) | `page`, `main.js`, `main.css` + head ต่อหน้า: `index`, `search`, `novel.{info,menu,read,type,ranking}`, `user.{login,reg}` |
| root (5) | `index`, `404`, `err`, `global.body`, `footer.global` |

## สิ่งที่แก้ในรอบ 4.1 (2026-10-23)

### เพิ่มหน้าที่ขาด
ก่อนหน้านี้มีแต่หน้า novel และ user บางส่วน โมดูลอื่นเรียกแล้วขึ้น
`ไม่พบไฟล์เทมเพลต` — รอบนี้เพิ่ม 72 ไฟล์ให้ครบทุก `dtemp` และลบ 18 ไฟล์ที่ไม่มีใครเรียกแล้ว
(ดูตารางด้านบน)

### แก้บั๊กที่ทำให้หน้าเพี้ยน

| อาการ | สาเหตุ / ที่แก้ |
|---|---|
| เปลี่ยนชื่อโฟลเดอร์เทมเพลตแล้ว CSS/JS หาย | `header/main.js.html`, `footer.global.html`, `novel/read.html` เขียน `/templates/fantastic-novel/...` ตรง ๆ → เปลี่ยนเป็น `{templates}` |
| `{header:header/script.html}`, `{header:novel/global.body.html}` ค้างเป็นข้อความ | include ชี้ไฟล์ที่ไม่มีในเทมเพลต |
| เนวิเกเตอร์ขึ้น `{已登录}` / `{未登录}` ทั้งหน้า | เงื่อนไขนี้ทำงานเฉพาะเมื่อโมดูล user ถูกโหลด หน้าของโมดูลอื่นจึงเห็นแท็กดิบ → เปลี่ยนเป็นเมนูบัญชีแบบไม่มีเงื่อนไข |
| ลิสต์ขึ้น `{小说封面}` เป็นตัวหนังสือ | `{封面}` มีเฉพาะหน้าเนื้อหา ในลิสต์ใช้ `{小说封面}` |
| หน้า 404 / error ว่างเปล่า | `404.html`, `err.html` เป็นไฟล์ 0 byte |
| เปิด modal ตั้งค่าแล้วเด้ง `alert("Ready")` | `alert()` ค้างใน `footer.global.html` และ `novel/read.html` |
| ลิงก์เพื่อนบ้าน/รายการหน้าเดี่ยวขึ้นเป็นแท็กดิบ | ไวยากรณ์เก่า `{友链:0:0:0:5:...}` และ `{单页:6}` ไม่ตรงกับที่ V4.446.1257 อ่าน → ใช้ named argument และตัดบล็อกที่ต้องพึ่งโมดูลอื่นออกจาก footer กลาง |
| `<head>` ไม่เคยถูกปิด | ไม่มีไฟล์ไหนปิด `</head>` → ย้ายไปไว้ใน `global.body.html` |
| โหลด Facebook SDK ของผู้เขียนเทมเพลตทุกหน้า | `global.body.html` โหลด `connect.facebook.net` ด้วย appId ของเจ้าของเดิม → ลบ |
| manifest ของ PWA ใช้ไม่ได้ | `static/image/manifest.json` เขียน path ไอคอนเป็น `/{templates}/static/images/...` (path ผิด + ไอคอนหาย) → เปลี่ยนเป็น path สัมพัทธ์กับไฟล์ manifest |

### ตัดข้อมูลของเว็บต้นทาง
ลิงก์ nay-noi.com, Google Drive, Facebook page, GA `UA-147520547-3`, แบนเนอร์พันธมิตร
(Copyscape / iFastNet พร้อม affiliate id), โลโก้และภาพพันธมิตร, ตัวอย่างนิยายต่างประเทศ
(Zongheng) — เปลี่ยนเป็นแท็กของระบบ (`{网站名}`, `{邮箱}`, `{作者中心}`, `{url:module;...}`)
หรือลบออก

### อื่น ๆ
- หน้า user 22 หน้าเดิมถูกแปลงมาใช้โครงเดียวกับเทมเพลต (การ์ด/ตาราง Materialize + เมนูข้าง)
- `getpsw` / `repsw` เขียนใหม่ให้อยู่ในธีม (เดิมเป็นหน้าดิบที่มี CSS `user/static/*` ของตัวเอง)
- ลบ partial ที่ไม่มีใครใช้แล้ว: `header/{article.content,article.index,bbs.index,diy}.html`,
  `user/inc_{header,footer,toper,fheader}.html`

## ข้อจำกัดที่รู้

- `dict.js` แปลเฉพาะวลีที่มีคีย์อยู่ (122 วลี) ข้อความใหม่ที่เพิ่มเข้าไปจะไม่ถูกแปลจนกว่าจะเพิ่มคีย์
- หน้า `author` / `editor` เป็นฟอร์มปกติ — ไม่มี AJAX อนุมัติ/ปฏิเสธแบบเทมเพลตต้นฉบับ
  (ต้องใช้ `<script>` ซึ่งชนกับสคริปต์กลาง)
- หน้า `charge` แสดงทั้งช่องทางออนไลน์และบัตรพร้อมกัน (เดิมสลับด้วย JS)
- PWA ไม่มี service worker จึงไม่มี offline

## Roadmap

- [x] แยก header ออกจากกันเป็น partial
- [x] สลับภาษา ไทย/อังกฤษ
- [x] ปรับขนาดและตระกูลฟอนต์
- [x] หน้าอ่านรองรับนิยาย/รูปภาพ/วิดีโอ
- [x] เปิด-ปิด animation
- [x] รองรับ WebApp (manifest + icon + standalone; ไม่รวม offline)
- [x] เทมเพลตครบทุกโมดูล (about, app, article, author, bbs, diy, down, editor, link, message, novel, picture, replay, user, zt)
- [ ] ชุดสีให้เลือกมากกว่า dark/light
- [ ] อ่านออกเสียงสำหรับผู้พิการทางสายตา
- [ ] โหมดสำหรับผู้ป่วยตาบอดสี
- [ ] แจ้งขออนุญาต Cookies / LocalStorage
- [ ] นโยบายความเป็นส่วนตัว / ข้อตกลงการใช้งานฉบับเว็บ
- [ ] ลดขนาด CSS/JS/HTML เพื่อเวลโหลด
