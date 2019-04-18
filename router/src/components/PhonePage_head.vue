<template>
    <div class="conterse">
        <div class="headers">
            <div class="headers_logs">
                <img class="headers_imgs" src="../assets/8_hader.png" alt="">
            </div>
            <div class="headers_xia">
                <router-link to="/Status_bar" class="headers_left">
                    <img @click="jumpWode()" class="headers_left" src="../assets/8_menuImg.png" alt="">
                </router-link>
                <router-link to="/scanning" class="headers_right">
                    <img @click="jumpTianjia()" class="headers_right" src="../assets/8_menuImgs.png" alt="">
                </router-link>
                <h3 class="headers_tlit">保险箱</h3>
            </div>
        </div>
        <div class="logs">
            <span class="logLitie">牛批<strong>智能</strong>保险箱<br>别说了     我爱了</span>
            <img class="logImg" v-bind="srcc" src="../assets/guanggao@3x.png" alt="">
            <div class="Dians">
                <div @Click="dianji()" class="diana"></div>
                <div @Click="dianji()" class="dian"></div>
                <div @Click="dianji()" class="dian"></div>
            </div>
        </div>
        <div class="footer">
            <img class="footerImg" src="../assets/safe@2x.png" alt="">
            <h3 class="footerLitie">N  <strong>·</strong>  B保险箱</h3>
            <h3 class="footerLities">最后一次的位置:幻想乡</h3>
            <router-link to='/Bxx_state'><button class="footerBtn">监听此保险箱</button></router-link>
        </div>
    </div>
</template>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .conterse{
        width: 7.5rem;
        height: 11.34rem;
    }
    .headers{
        width: 100%;
        height: 1.26rem;        
    }
    .headers_logs{
        width: 100%;
        height: 0.39rem;
        background-color: black;
    }
    .headers_imgs{
        width: 100%;
        margin-bottom:0.7rem;
    }
    .headers_xia{
        width: 100%;
        height: 0.87rem;
        background-color: #17181a;
    }
    .headers_left{
        margin-bottom: 0.2rem;
    }
    .headers_tlit{
        margin-right: 2.45rem;
        margin-top: 0.2rem;
        font-size: 0.3rem;
        color: #ffffff;
        float: right;
    }
    .headers_right{
        float: right;
    }
    .logs{
        width: 100%;
        height: 3.8rem;
    }
    .logImg{
        height: 3.8rem;
    }
    .logLitie{
        position: absolute;
        color: #ffffff;
        font-size: 0.3rem;
        letter-spacing: 0.06rem;
        margin-left: 0.6rem;
        margin-top: 1.08rem;
    }
    .diana{
        float: left;
        border: 1px solid rgba(0, 0, 0, 0.527);
        border-radius: 50%;
        width: 14px;
        height: 14px;
        margin-left: 18px;
        background-color: rgb(255, 255, 255);
    }
    .dian{
        float: left;
        border: 1px solid rgba(0, 0, 0, 0.527);
        border-radius: 50%;
        width: 14px;
        height: 14px;
        margin-left: 18px;
        background-color: rgba(255, 255, 255, 0.562);
    }
    .Dians{
        width: 102px;
        height: 14px;
        position: absolute;
        float: left;
        margin-top: -0.66rem;
        margin-left: 3.18rem;
    }
    .footers{
        width: 100%;
        height: 8.28rem;
    }
    .footerImg{
        margin-top: 0.8rem;
        margin-left: 2rem;
    }
    .footerLitie{
        font-weight: inherit;
        font-size: 0.44rem;
        color: #000000;
        margin-top: 0.04rem;
        margin-left: 2.56rem;
    }
    .footerLities{
        font-weight: inherit;
        font-size: 0.26rem;
        color: #999999;
        letter-spacing: 0.03rem;
        margin-left: 2.32rem;
        margin-top: 0.25rem;
    }
    .footerBtn{
        width: 6.6rem;
        height: 0.96rem;
        background-color: #0090ff;
        font-size: 29px;
        color: #ffffff;
        letter-spacing: 3px;
        margin-left: 0.41rem;
        /* margin-top: 1.65rem; */
    }
</style>
