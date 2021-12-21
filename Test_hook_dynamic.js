
console.log("Arrancamos la chicha... ");
Java.deoptimizeBootImage(); //Esto hay que ponerlo al principio de los scipt para que nos de tiempo a atachearnos a los procesos

Java.perform(function() {


    var class_to_hook = Java.use('com.apart.already.UDtBwJwGzZaQnHnFbSyFnTzOaQcXsBeCqBfDiDuAdMnGgCzNpZiWqHa');
    var i = 0;

    
    class_to_hook.onCreate.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "onCreate()");
        var return_value = this.onCreate();
        console.log("Return_value onCreate:" + return_value);
        Thread.sleep(1);
        return return_value;
    }

    class_to_hook.floorginger.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "floorginger");
        var return_value = this.floorginger();
        console.log("Return_value:" + return_value);
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }

    class_to_hook.mentionvast.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "mentionvast");
        var return_value = this.mentionvast();
        console.log("Return_value:" + return_value);
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }


    class_to_hook.sadmaze.overload("java.lang.String").implementation = function(input_str){
        console.log("Inside ..." + this + "sadmaze");
        var input =input_str;
        console.log("input_sadmaze: " + input_str );
        var return_value = this.sadmaze(input_str);
        console.log("Return_value:" + return_value); // Si devuelve TRUE Es que todo ha ido bien
        Thread.sleep(1);
        return return_value;
    }

    class_to_hook.panelpurity.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "panelpurity");
        var return_value = this.panelpurity();
        console.log("Return_value:" + return_value);
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }

    class_to_hook.crewpolar.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "crewpolar");
        var return_value = this.crewpolar();
        console.log("Return_value:" + return_value.trim());
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }

    class_to_hook.dishalso.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "dishalso");
        var return_value = this.dishalso();
        console.log("Return_value:" + return_value.trim());
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }


    class_to_hook.labenlist.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "labenlist");
        var return_value = this.labenlist();
        console.log("Return_value:" + return_value.trim());
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }
    

    class_to_hook.adjustbomb.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "adjustbomb");
        var return_value = this.adjustbomb();
        console.log("Return_value:" + return_value.trim());
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }

    class_to_hook.sameoutput.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "sameoutput");
        var return_value = this.sameoutput();
        console.log("Return_value:" + return_value.trim());
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }
    class_to_hook.lyricsdespair.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "lyricsdespair");
        var return_value = this.lyricsdespair();
        console.log("Return_value:" + return_value.trim());
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }

    class_to_hook.lengthpower.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "lengthpower");
        var return_value = this.lengthpower();
        console.log("Return_value:" + return_value.trim());
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }

    class_to_hook.exhaustwill.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "exhaustwill");
        var return_value = this.exhaustwill();
        console.log("Return_value:" + return_value.trim());
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }
    
    class_to_hook.gentledilemma.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "gentledilemma");
        var return_value = this.gentledilemma();
        console.log("Return_value:" + return_value.trim());
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }

    class_to_hook.sustainbroken.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "sustainbroken");
        var return_value = this.sustainbroken();
        console.log("Return_value:" + return_value.trim());
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }

    
    //Parte del AttachBaseContext():

    class_to_hook.attachBaseContext.implementation = function(context_param){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "attachBaseContext()");
        var return_value = this.attachBaseContext(context_param);
        Thread.sleep(1);
    }


    class_to_hook.attachBaseContext.implementation = function(context_param){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "attachBaseContext()");
        var return_value = this.attachBaseContext(context_param);
        Thread.sleep(1);
    }
    
    class_to_hook.expireframe.implementation = function(context_param){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "expireframe()");
        var return_value = this.expireframe(context_param);
        console.log("Return_value:" + return_value);
        Thread.sleep(1);
        return return_value;
    } 

    class_to_hook.harborivory.implementation = function(file_param){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "harborivory() " + i);
        console.log("[+] Parametro_entrada" + file_param)
        var return_value = this.harborivory(file_param);
        console.log("Return_value:" + return_value);
        Thread.sleep(1);
        i++;
        return return_value;
    } 
    
    class_to_hook.primaryfield.implementation = function(string_param){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "primaryfield()");
        console.log("[+] Parametro_entrada" + string_param)
        var return_value = this.primaryfield(string_param);
        console.log("Return_value:" + return_value);
        Thread.sleep(1);
        return return_value;
    } 
    
    class_to_hook.coreaunt.implementation = function(str,str2,stringbuffer,context_p){

        //console.log("Dentro de Sctdsqres.j()")

        console.log("Inside ..." + this + "coreaunt()");
        console.log("[+] Parametros de Entrada:  " + str + "2 " +  str2 + "3 " + stringbuffer + " 4 " + context_p)
        var return_value = this.coreaunt(str,str2,stringbuffer,context_p);
        console.log("Return_value:" + return_value);
        Thread.sleep(1);
    } 
    
    var class_to_hook2 = Java.use("com.apart.already.PHbYsKp");

    class_to_hook2.tuitioncensus.implementation = function(str,str2,stringbuffer,context_p){

        //console.log("Dentro de Sctdsqres.j()")

        console.log("Inside ..." + this + "tuitioncensus()");
        console.log("[+] Parametros de Entrada:  " + str + "2 " +  str2 + "3 " + stringbuffer + " 4 " + context_p)
        var return_value = this.tuitioncensus(str,str2,stringbuffer,context_p);
        Thread.sleep(1);
    } 
   
    class_to_hook2.lemonreason.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "lemonreason");
        var return_value = this.lemonreason();
        console.log("Return_value:" + return_value.trim());
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }
    class_to_hook2.injuryservice.implementation = function(str1,str2){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "injuryservice");
        console.log("[+] Parametros de Entrada:  " + str1 + " --> "  +  str2 );
        var return_value = this.injuryservice(str1,str2);
        console.log("Ejecuta Class.Forname(" + str2 +")");
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }

    
    class_to_hook2.moonquiz.implementation = function(){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "moonquiz");
        var return_value = this.moonquiz();
        console.log("Return_value:" + return_value.trim());
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }

    class_to_hook2.manualcomic.implementation = function(cls, srt){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "manualcomic");
        console.log("[+] Parametros de Entrada:  " + cls + " --> "  +  srt );
        var return_value = this.manualcomic(cls,srt);
        //console.log("Return_value:" + return_value.trim());
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
        return return_value;
    }

    class_to_hook2.ivorybegin.implementation = function(field_p, str, str2, str3, weakreference){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "ivorybegin");
        console.log("[+] Parametros de Entrada:  " + field_p + " " + str + " " + str2 + " " + str3 + " " + weakreference );
        var return_value = this.ivorybegin(field_p, str, str2, str3, weakreference); //Este es el que llama a zebretiny que es el que hace el DEXCLASSLOADER
        console.log("Return_value:" + return_value);
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
    }
    
    class_to_hook2.zebratiny.implementation = function(field_p, str, str2, str3, weakreference){

        //console.log("Dentro de Sctdsqres.j()")
        console.log("Inside ..." + this + "zebratiny");
        console.log("[+] Parametros de Entrada:  " + field_p + " " + str + " " + str2 + " " + str3 + " " + weakreference );
        var return_value = this.zebratiny(field_p, str, str2, str3, weakreference); //Este es el que llama a zebretiny que es el que hace el DEXCLASSLOADER
        console.log("Return_value:" + return_value);
        return return_value;
        //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
        Thread.sleep(1);
    }

    
//metodos que cargan con el dexClassLoader:

    
class_to_hook2.fitnessdynamic.implementation = function(){

    //console.log("Dentro de Sctdsqres.j()")
    console.log("Inside ..." + this + "fitnessdynamic");
    var return_value = this.fitnessdynamic();
    console.log("Return_value:" + return_value.trim());
    //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
    Thread.sleep(1);
    return return_value;
}

class_to_hook2.lunarplunge.implementation = function(){

    //console.log("Dentro de Sctdsqres.j()")
    console.log("Inside ..." + this + "lunarplunge");
    var return_value = this.lunarplunge();
    console.log("Return_value:" + return_value.trim());
    //Thread.sleep(500); //Para no tener que estar instalando e desinsatallando la app.
    Thread.sleep(1);
    return return_value;
}





    
});