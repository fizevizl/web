function Complete() {
  if (Sel.pwd.value !== Sel.pwd1.value) {
    alert("Ошибка при вводе пароля. Попробуйте еще раз");
  } else {
    var szId = Sel.id.value;
    var szPwd = Sel.pwd.value;
    alert("Регистрация выполнена: \nID=" + szId + "\nPassword=" + szPwd);
  }
}