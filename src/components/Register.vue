<template>
        <div class="main-sign">
        <LoadingPage />
           
            <div class="container-input">
                <div class="logo">
                    <img src="img/logo.png" alt="Logo Pic">
                </div>

                <div class="sign-inp">
                    <p class="clr-darkBlue fnt-medium">Razón Social</p>
                    <input type="text" class="input-field">
                </div>
                <div class="sign-inp">
                    <p class="clr-darkBlue fnt-medium">RNC</p>
                    <input type="text" class="input-field">
                </div>
                <div class="sign-inp">
                    <p class="clr-darkBlue fnt-medium">Nombre de Usuario</p>
                    <input type="text" class="input-field">
                </div>
                <div class="sign-inp">
                    <p class="clr-darkBlue fnt-medium">Contraseña</p>
                    <input type="password" class="input-field">
                </div>
      
                <div class="check-valid">
                    <input type="checkbox" class="input-chkd" id=""><span class="clr-gray">He leído y acepto las <a href="#">Políticas de Aplicacion</a> de manejo de informacion.</span>
                </div>    
                <a href="/Login" value="Registrar" class="btn btn-blue">Registrar</a>
            </div>   

            <div class="sign-pic">
                <img src="img/gov.jpg" alt="gov image">
            </div>
        </div>
</template>
