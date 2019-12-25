/**
 * Language files for Fantastic Novel Template
 * FIle name : index.dict.js
 * Developer : SubMaRk
 * Website   : https://naynum.engineer
 * Date      : June 27, 2019
 * Update    : June 29, 2019
 */
$(function() {
    var dict = {
        "นายน้อย": {
            en: "NAY-NOI",
            zh: ""
        },
        "หน้าหลัก": {
            en: "Home"
        },
        "เรื่องทั้งหมด": {
            en: "All"
        },
        "หมวดหมู่": {
            en: "Categories"
        },
        "อันดับ": {
            en: "Ranking"
        },
        "เกี่ยวกับ": {
            en: "About"
        },
        "สนับสนุนผู้แปล": {
            en: "Support Translators"
        },
        "การใช้งาน": {
            en: "How to Use"
        },
        "คำถามที่พบบ่อย": {
            en: "Faqs"
        },
        "รายงานการละเมิด": {
            en: "Report Abuse"
        },
        "เงื่อนไขการใช้งาน": {
            en: "Terms of Use"
        },
        "นโยบายความเป็นส่วนตัว": {
            en: "Privacy Policy"
        },
        "ติดต่อเรา": {
            en: "Contact Us"
        },
        "ช่วยเหลือเว็บไซต์": {
            en: "Donate Website"
        },
        "ลงนิยาย": {
            en: "Create Novel"
        },
        "ศูนย์ผู้ใช้": {
            en: "User Center"
        },
        "พื้นที่ส่วนตัว": {
            en: "My Space"
        },
        "รูปประจำตัว": {
            en: "Change Avatar"
        },
        "ข้อความ": {
            en: "Message"
        },
        "ชั้นหนังสือ": {
            en: "Bookshelf"
        },
        "เรื่องที่ชอบ": {
            en: "Favorite"
        },
        "เช็คชื่อ": {
            en: "Check-in"
        },
        "ออกจากระบบ": {
            en: "Logout"
        },
        "ศูนย์นักเขียน": {
            en: "Writing Center"
        },
        "จัดการนิยาย": {
            en: "Novel Management"
        },
        "จัดการบทความ": {
            en: "Article Management"
        },
        "เข้าสู่ระบบ": {
            en: "Login"
        },
        "ลงทะเบียน": {
            en: "Register"
        },
        "กู้คืนรหัสผ่าน": {
            en: "Password Recovery"
        },
        "ไทย": {
            en: "Thai"
        },
        "อังกฤษ": {
            en: "English"
        },
        "จีน": {
            en: "Chinese"
        },
        "ข้อมูลทั่วไป": {
            en: "General"
        },
        "แผนผังเว็บไซต์": {
            en: "Sitemap"
        },
        "เว็บในเครือข่าย": {
            en: "Our Services"
        },
        /* Index Page */
        "นิยายแนะนำ": {
            en: "Recomended Novel"
        },
        "นิยายมาใหม่": {
            en: "New Novel"
        },
        "อัพเดทล่าสุด": {
            en: "Lastest Update"
        },
        "ข้อมูลผู้ใช้": {
            en: "User Infomation"
        },
        "อันดับนิยาย": {
            en: "Novel Ranking"
        },
        "วัน": {
            en: "Day"
        },
        "สัปดาห์": {
            en: ""
        },
        "เดือน": {
            en: ""
        },
        "อ่านเรื่องนี้": {
            en: ""
        },
        "เข้าชมทั้งหมด": {
            en: "Total"
        },
        "ครั้ง": {
            en: "View"
        },
        "หมวดหมู่นิยาย": {
            en: "Novel Categories"
        },
        "เรื่อง": {
            en: "Title"
        },
        "ชื่อบท": {
            en: "Chapter Name"
        },
        "ผู้แปล": {
            en: "Translator"
        },
        "เวลาอัปเดท": {
            en: "Update Time"
        },
        "ลิ้งก์เพื่อนบ้าน": {
            en: "Friends Link"
        },
		lang: {
			th: "เลือกภาษา",
			en: "Select Language"
		}
    };
    
    var nowlang=localStorage.getItem("nowlang");if(nowlang==null){var _t=$('body').translate({lang:"th",t:dict});var str=_t.g("translate");localStorage.setItem("nowlang","th");document.querySelector("meta[http-equiv='Content-Language']").setAttribute("content","th")}else{var _t=$('body').translate({lang:nowlang,t:dict});var str=_t.g("translate");document.querySelector("meta[http-equiv='Content-Language']").setAttribute("content",nowlang)};$(".lang").click(function(ev){var lang=$(this).attr("data-value");_t.lang(lang);document.querySelector("meta[http-equiv='Content-Language']").setAttribute("content",lang);localStorage.setItem("nowlang",lang);ev.preventDefault()})
});