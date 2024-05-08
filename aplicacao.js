function login()
{
    let URL = "http://192.168.15.10:5000/";

    var onSuccesso = function(data)
    {
        alert("Sucesso!\n\n" + data);
    };

    var onFracasso = function(data)
    {
        alert("Fracasso!\n\n" + data);
    };

    apiPost(
        URL+"Auth/Login",
        "",
        {"login":"master", "password1":"123", "password2":"123"},
        onSuccesso,
        onFracasso);
}