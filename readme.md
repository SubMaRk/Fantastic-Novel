# Template for WeimengCMS
    Rename to Fantastic Novel

## Infomation
    Name    :   Fantastic Novel
    Author  :   SubMaRk
    Version :   4.0
    Date    :   2021-03-29
    URL     :   https://me.nay-noi.com
    Demo    :   https://nv.nay-noi.com

## JS Libraries used
    jquery.js
    materialize.js
    yall.js
    aos.js
    scrolls.js
    sweetalert2.js
    PageGuard.js

## CSS Libraries used
    materialize.css
    flag-icon.css
    aos.css
    fontawesome.css
    sweetalert2.css
    hover.css

## Fonts
    BoonJot
    Fc-Lamoon
    JS Toomtam
    Layijimahaniyom
    TF Arluck
    TF Nopscript
    TF Phethai
    TH Charmonman
    TH Dan Vi Vek

## ภาพรวมเทมเพลต
- [x] ปรับปรุงส่วนของ header ให้แยกออกจากกัน
- [x] เพิ่มฟังก์ชั่นปรับเปลี่ยนภาษา
- [x] เพิ่มฟังก์ขั่นเปลี่ยนขนาดอักษรให้ครอบคลุม
- [x] เพิ่มฟังก์ชั่นให้หน้าอ่านรองรับการใช้งานด้านวีดีโอ รูปภาพ และนิยาย
- [ ] เพิ่มความหลากหลายของสีในเทมเพลต
- [x] เพิ่มฟังก์ชั่นการปรับเปลี่ยนอักษรที่ใช้บนเว็บให้หลากหลาย
- [ ] เพิ่มฟังก์ชั่นการอ่านออกเสียงสำหรับผู้พิการทางสายตา
- [ ] เพิ่มฟังก์ชั่นเพื่อปรับเปลี่ยนให้เข้ากันได้กับผู้ที่ป่วยเป็นโรคตาบอดสี
- [x] เพิ่มการเลือกว่าจะเปิดให้เว็บทำการ animate หรือไม่ เพื่อลดปัญหาการแสดงผล
- [ ] เพิ่มการแจ้งเตือนเพื่อขออนุญาตใช้งาน Cookies และ LocalStoage
- [ ] อัพเดทนโยบายความเป็นส่วนตัว
- [ ] อัพเดทนโยบายการใช้งาน
- [ ] อัพเดทข้อตกลงในการใช้งาน
- [ ] ลดขนาด CSS, JS และ HTML เพื่อลดเวลาในการโหลดหน้าเว็บ
- [ ] เพิ่มการรองรับ WebApp

## อัปเดตล่าสุด (2026-10-23)

เทมเพลตนี้ถูกอัปเดตให้ใช้กับ WMCMS **V4.446.1257** ได้ครบทุกโมดูล

### เพิ่มเทมเพลตให้ครบทุกโมดูล (ตอนนี้ 124 ไฟล์ HTML)
ก่อนหน้านี้มีแค่หน้า novel กับ user บางส่วน ทำให้โมดูลอื่นเรียกแล้วขึ้น error
`ไม่พบไฟล์เทมเพลต` ตอนนี้ครบทุก route ที่ระบบเรียกใช้:

| โมดูล | ไฟล์ |
|---|---|
| about | `about.html` `tindex.html` `type.html` |
| app | `index` `type` `app` `replay` `search` |
| article | `index` `type` `tindex` `article` `search` `replay` |
| author | ครบ 18 ไฟล์ (แดชบอร์ด, ใบสมัคร, ข้อตกลง, แก้ไขนิยาย/บทความ/ตอน/เล่ม, สถิติ, รายได้) |
| bbs | `index` `type` `list` `bbs` `post` `search` |
| diy / down / message / replay | `diy.html` `down/down.html` `message/add.html` `replay/list.html` |
| editor | `index` `basic` `novel` `novel_chapter` `novel_cover` |
| link | `index` `type` `join` `show` `jump` |
| novel | `index` `index_boy` `index_girl` `tindex` `toplist` `replay` (เพิ่มจากเดิม) |
| picture | `index` `type` `tindex` `picture` `search` `toplist` |
| user | `bind` `fvistlist` `sign` `signlist` `unsub_weixin` + แปลงหน้าเดิม 22 หน้าเป็นโครงเดียวกับเทมเพลต |
| zt | `zt.html` `type.html` |

### แก้ปัญหาที่ทำให้หน้าเพี้ยน
1. **path ตายตัว** — สคริปต์และ CSS ใน `header/main.js.html`, `footer.global.html`, `user/login.html`, `user/reg.html` เขียน `/templates/fantastic-novel/...` ตรง ๆ ทำให้ใช้ชื่อโฟลเดอร์อื่นไม่ได้ เปลี่ยนเป็น `{templates}/...` ทั้งหมด
2. **include ที่ไม่มีอยู่จริง** — `{header:header/script.html}`, `{header:novel/global.body.html}`, `{header:novel/header.html}`, `{templates}/static/image/...` (ไฟล์อยู่ใน `user/static/`) แก้ให้ชี้ไฟล์ที่มีจริง
3. **แท็กที่ไม่มีในระบบ** — `{小说封面}` ในลิสต์ (ใช้ `{封面}` เฉพาะหน้าเนื้อหา), `{网站简介}`, `{文章首页}` ในเนวิเกเตอร์, `{排行类型}` ใน SEO, `{友好...}` แบบเก่า (`{友链:0:0:0:5:...}`) เปลี่ยนเป็นไวยากรณ์ที่ V4.446.1257 รองรับ
4. **เงื่อนไข `{已登录}` / `{未登录}` ในเนวิเกเตอร์** — เทมเพลตนี้แสดงเฉพาะเมื่อโมดูล user ถูกโหลด หน้าของโมดูลอื่นจะเห็นแท็กดิบ เปลี่ยนเป็นเมนูบัญชีแบบไม่มีเงื่อนไข
5. **ข้อมูลของเว็บเจ้าของเทมเพลต** — ลิงก์ nay-noi.com, Google Drive, Facebook page, GA `UA-147520547-3`, โลโก้พันธมิตร, ลิงก์เว็บบอร์ดภายนอก เปลี่ยนเป็นแท็กของระบบ (`{网站名}` `{邮箱}` `{作者中心}` `{url:module;...}`)
6. **`404.html` และ `err.html` ว่างเปล่า** — หน้า 404 และหน้า error ของทั้งเว็บแสดงหน้าว่าง เขียนใหม่ให้เป็นหน้าในธีม
7. **ดัก `alert()` ใน `footer.global.html`** — ทุกครั้งที่เปิด modal ตั้งค่าจะเด้ง `alert("Ready")` และ `alert('Closed')` ลบออก

### ข้อกำหนดของระบบที่เทมเพลตนี้ทำตาม
- หน้าใหม่ทุกหน้าลงท้ายด้วย `{header:footer.global.html}` ซึ่งโหลด JS ของธีมและปิด `</body></html>` เอง
- `header/page.html` เป็น head กลางของหน้าใหม่ทั้งหมด (title/key/desc/OG)
- ไม่มี `<script>` ในหน้าเนื้อหา เพื่อไม่ให้ชนกับสคริปต์กลาง

## สำหรับโมดูล
- [x] เพิ่มเทมเพลตให้รองรับโมดูล about
- [x] เพิ่มเทมเพลตให้รองรับโมดูล article
- [x] เพิ่มเทมเพลตให้รองรับโมดูล author
- [x] เพิ่มเทมเพลตให้รองรับโมดูล bbs
- [x] เพิ่มเทมเพลตให้รองรับโมดูล diy
- [x] เพิ่มเทมเพลตให้รองรับโมดูล down
- [x] เพิ่มเทมเพลตให้รองรับโมดูล link
- [x] เพิ่มเทมเพลตให้รองรับโมดูล message
- [x] เพิ่มเทมเพลตให้รองรับโมดูล user
