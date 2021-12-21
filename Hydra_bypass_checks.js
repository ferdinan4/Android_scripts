console.log("Arrancamos la chicha... ");
Java.deoptimizeBootImage(); //Esto hay que ponerlo al principio de los scipt para que nos de tiempo a atachearnos a los procesos

Java.perform(function() {

// remove bypass
var unlinkPtr = Module.findExportByName(null, 'unlink'); //Nos devuleve la direccion absoluta de unlink
var funcion_a_remplazar = function (a){
    console.log("[+] Unlink : " +  Memory.readUtf8String(ptr(a)))
    return 0 //Successs
}
//NativeCallBack (func, ReturnType, Argumentos);
//Esa funcion_a_remplazar cuando le ponemos los parametros al lado de function son los parametros que tendria la funcion donde hacemos el replace

Interceptor.replace(unlinkPtr, new NativeCallback(funcion_a_remplazar, 'int', ['pointer'])); //Con Interceptor.replace reemplazamos la funcion indicada en el primer parametro ("unlink") por la indicada en el segundo



// time   

var timePtr = Module.findExportByName(null, 'time');
Interceptor.replace(timePtr, new NativeCallback( function (){
    console.log("[+] native time bypass : ")
    return 1554519179
},'long', ['long']));

//Java side: GetSimOperator and Timecheck
Java.perform(function() {
    var f = Java.use("android.telephony.TelephonyManager")
    var t = Java.use('java.util.Date')
    //country bypass
    f.getSimCountryIso.overload().implementation = function(){
        console.log("Changing country from " + this.getSimCountryIso() + " to tr ")
        return "tr"
    }
    t.getTime.implementation = function(){
    console.log("[+] Java date bypass ")
    return 1554519179000 
    }
 })

});