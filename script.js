let newWindow;

function toggleButtons() {
    const isOpen = newWindow !== undefined;
    document.getElementById("closeBtn").disabled = !isOpen;
    document.getElementById("resizeBtn").disabled = !isOpen;
    document.getElementById("scrollBtn").disabled = !isOpen;
    document.getElementById("confirmBtn").disabled = !isOpen;
}

function openWindow() {
    newWindow = window.open("", "Practice", "width=400,height=400");
    newWindow.document.write(`<h1>Story of Missing riya????</h1><div style="height:2000px;"></div>`);
    message("Lets Begin");
    toggleButtons();
}

function closeWindow() {
    if (newWindow !== undefined) {
        message("Riya Ekada?");
        newWindow.close();
        newWindow = undefined;
        toggleButtons();
    } else {
        message("New Window is Not Opened");
    }
}

function resizeWindow() {
    if (newWindow !== undefined) {
        message("Riya Evaru?");
        newWindow.resizeTo(500, 500);
    } else {
        message("There is no window to resize");
    }
}

function scrollWindow() {
    if (newWindow !== undefined) {
        newWindow.scrollTo({
            top: 700,
            behavior: 'smooth'
        });
        message("Dhamini Doughter");
    } else {
        message("There is no window to scroll");
    }
}

function promptWindow() {
    let result = window.prompt("Enter Your Name: " , "Dhamini ");
    if (result === "") {
        message("No Name Entered");
        return;
    }
    message(`${result} Evaru?`);
}

function confirmWindow() {
    if (newWindow) {
        let flag = window.confirm("Do you want to close this window?");
        if (flag) {
            newWindow.close();
            newWindow = undefined;
            message("Riya Mother.");
        } else {
            message("Riya Mother.");
        }
        toggleButtons();
    } else {
        message("No window is open to close.");
    }
}

function alertWindow() {
    window.alert("Vallu idharu evaro naku telidhu.");
}

function printWindow() {
    window.print();
}

function clearOutput() {
    document.getElementById("output").innerText = "";
}

function message(data) {
    let output = document.getElementById("output");
    output.innerText = data;
    output.style.animation = 'slideIn 0.5s ease';
}