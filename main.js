// import
import Dropdown from "bootstrap/js/dist/dropdown";
import Button from "bootstrap/js/dist/button";
import Modal from "bootstrap/js/dist/modal";
import Tooltip from "bootstrap/js/dist/tooltip";

// 드롭다운 초기화
const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})

// 툴팁 초기화
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl)
})

// 모달 초기화
// 두번째 인자로 객체를 전달하여 다양한 추가 옵션을 지정할 수 있다.
// 자세한 내용은 홈페이지 참조
new Modal(document.getElementById('exampleModal'), {
  backdrop: "static"
})




// 모달 포커스
const Modal1 = document.querySelector('#exampleModal')
const Input1 = document.querySelector('#exampleInputEmail1')
Modal1.addEventListener('shown.bs.modal', function () {
  Input1.focus()
})

