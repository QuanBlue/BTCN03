function isNumber(n) {
	if (n == "") return false;
	return !isNaN(n);
}

function check_number(id) {
	var num = document.getElementById(id).value;
	var announce = document.getElementById('announce')

	if (!isNumber(num)) {
		if (id == "1st-num") announce.textContent = "Giá trị nhập ở ô số Thứ Nhất không phải là số";
		if (id == "2nd-num") announce.textContent = "Giá trị nhập ở ô số Thứ Hai không phải là số";
	}
	else {
		announce.textContent = "";
	}
}
