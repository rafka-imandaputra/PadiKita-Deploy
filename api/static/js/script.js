// Script File

function showImage(fileInput) {
	if(fileInput.files && fileInput.files[0]) {

		$("#result").empty();
		$("#wait").empty();
		$("#img").css('display', 'block');
		var reader = new FileReader();

		reader.onload = (e) => {
			$("#img").attr("src", e.target.result)
			$("span.file-name")[0].innerHTML = fileInput.files[0].name
		};

		reader.readAsDataURL(fileInput.files[0]);
	}

}

function sendFormData() {
	$('#wait').empty();
	var formData = new FormData($('#form')[0]);
	$("#wait").append("Tunggu, gambar sedang diproses..")

	$.ajax({
		type: 'POST',
		url: '/prediksi/classify',
		data: formData,
		contentType: false,
		cache: false,
		processData: false,
		success: function(data) {
			$('#wait').empty();
			$("#wait").append("Hasil prediksinya adalah");
			$("#result").empty();
			$("#result").append(data[0])
			$("#skor").empty();
			$("#skor").append(data[1])
			console.log('Success!');
		},
		error: function(data) {
			alert(data.responseText);
		}
	})

}

$(document).ready(function() {
	$("#file").change(function() {
		showImage(this);
	});

	$("#predict").on('click', sendFormData);
});