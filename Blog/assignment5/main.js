// ========================================================
// Assignment 5: JavaScript Post and Reply
// ========================================================

window.onload = setupFunction;

function setupFunction() {
    // กำหนดหัวข้อตามโจทย์
    var topHeader = document.getElementById("top");
    topHeader.innerHTML = "Welcome to the Forum";

    // ผูก Event ให้ปุ่มแบบ Unobtrusive
    var postButton = document.getElementById("postBtn");
    var clearButton = document.getElementById("clearBtn");

    postButton.onclick = postFunction;
    clearButton.onclick = clearFunction;
}

// ตัวแปรนับลำดับการโพสต์ เริ่มต้นที่ 0
var postCount = 0;

function postFunction() {
    var messageInput = document.getElementById("message");
    var text = messageInput.value;

    // เช็กค่าว่าง
    if (text.trim() === "") {
        alert("กรุณากรอกข้อความก่อนโพสต์");
        return;
    }

    // โพสต์ตามลำดับ 1 -> topic, 2 -> reply1, 3 -> reply2
    if (postCount === 0) {
        document.getElementById("topic").innerHTML = text;
        postCount++;
    } else if (postCount === 1) {
        document.getElementById("reply1").innerHTML = text;
        postCount++;
    } else if (postCount === 2) {
        document.getElementById("reply2").innerHTML = text;
        postCount++;
    } else {
        alert("กระทู้เต็มแล้ว (ครบ 3 โพสต์) กรุณากด Clear เพื่อเริ่มใหม่");
    }

    // ล้างช่องกรอกข้อความ
    messageInput.value = "";
}

function clearFunction() {
    // ล้างข้อความทั้งหมด
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    document.getElementById("message").value = "";

    // รีเซ็ตตัวนับ
    postCount = 0;
}