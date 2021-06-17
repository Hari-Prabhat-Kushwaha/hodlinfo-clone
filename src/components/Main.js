import React, { useState,useEffect, Component } from 'react';
import "./styles.css";
import {Header} from "./Header";
import {Footer} from "./Footer";
import 'react-circular-progressbar/dist/styles.css';
export const Main = () => {
    const [isLightTheme, setIsLightTheme ] = useState(false);
    const [countDownTimer, setCountDownTimer] = useState(60);
  useEffect(() => {
      if(countDownTimer == 0) setCountDownTimer(60);
    countDownTimer > 0 && setTimeout(() => setCountDownTimer(countDownTimer - 1), 1000);
  }, [countDownTimer])
const onThemeButtonClick = () => {
    setIsLightTheme(!isLightTheme)

};
    return (
        <React.Fragment>
            <div className={("theme-") + (isLightTheme ? "light" : "dark")}>
            <Header isLightTheme={isLightTheme} onThemeButtonClick={onThemeButtonClick } countDownTimer={countDownTimer}/>
            <div class="Container-fluid " style={{ padding: "0px 30px" }}>
                <div class="d-flex justify-content-around align-items-center average-header" style={{ padding: "10px 0px" }}>
                    <div class="text-center">
                        <div class="average-header-maintext color-green">0.47 %</div>
                        <div class="average-header-subHeading">5 Mins</div>
                    </div>
                    <div class="text-center">
                        <div class="average-header-maintext color-green">1.06 %</div>
                        <div class="average-header-subHeading">1 Hour</div>
                    </div>
                    <div style={{ "max-width": "40%" }}>
                        <div class="text-center font-32 average-block">
                            <div class="average-subText">
                                <span class="subText-heading">Best Price to Trade</span>
                            </div>
                            <div class="average-heading" style={{ "padding-bottom": "10px" }}>₹ 29,54,604</div>
                            <div class="average-subText">Average ETH/INR net price including commission</div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="average-header-maintext color-green">2.52 %</div>
                        <div class="average-header-subHeading">1 Day</div>
                    </div>
                    <div class="text-center">
                        <div class="average-header-maintext color-green">9.71 %</div>
                        <div class="average-header-subHeading">7 Days</div>
                    </div>
                </div>
                <a target="_blank" href="https://finstreet.in/">
                    <img src="cryptonews.png" style={{ width: "100%", padding: "0px 0px 20px" }} />
                </a>
            </div>
            <div class="fiat-crypto-table table-responsive" style={{ margin: "0px auto" }}>
                <table class="table table-borderless text-center">
                    <thead>
                        <tr>
                            <th>
                                <h4><span class="pointer">#</span></h4>
                            </th>
                            <th>
                                <h4><span class="pointer">Platform</span></h4>
                            </th>
                            <th>
                                <h4><span class="pointer">Last Traded Price</span></h4>
                            </th>
                            <th><h4><span class="pointer">Buy / Sell Price</span></h4>
                            </th>
                            <th><h4><span class="pointer">Difference</span></h4>
                            </th>
                            <th>
                                <h4><span class="pointer">Savings</span></h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="align-middle"><h4 class="table-text">1</h4></td>
                            <td class="align-middle"><a target="_blank" href="">
                                <h4 class="table-text"><img src="wazix.png" class="exchange-logo" ></img> <span class="exchange-name ">WazirX</span></h4>
                            </a></td><td class="align-middle"><h4 class="table-text">₹ 29,46,009</h4></td>
                            <td class="align-middle"><h4 class="table-text"><span>₹ 29,46,110 / ₹ 29,56,596</span></h4></td>
                            <td class="align-middle"><h4 class="table-text color-red">-0.29 %</h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">▼ ₹ 8,595</h4></td>
                        </tr>
                        <tr><td class="align-middle"><h4 class="table-text">2</h4></td>
                            <td class="align-middle"><a target="_blank" href="https://bit.ly/2BJxccc">
                                <h4 class="table-text">
                                    <img src="bitbns.png" class="exchange-logo" />
                                    <span class="exchange-name ">Bitbns</span>
                                </h4></a></td>
                            <td class="align-middle"><h4 class="table-text">₹ 29,43,341</h4></td>
                            <td class="align-middle"><h4 class="table-text"><span>₹ 29,40,025 / ₹ 29,46,546</span></h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">1.93 %</h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">▲ ₹ 55,602</h4></td>
                        </tr><tr><td class="align-middle"><h4 class="table-text">3</h4></td>
                            <td class="align-middle"><a target="_blank" href=" "><h4 class="table-text">
                                <img src="giotus.png" class="exchange-logo" /><span class="exchange-name ">Giotus</span></h4></a></td>
                            <td class="align-middle"><h4 class="table-text">₹ 29,70,000</h4></td><td class="align-middle"><h4 class="table-text"><span>₹ 29,42,000/ ₹ 29,89,500</span></h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">2.85 %</h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">▲ ₹ 82,261</h4></td>
                        </tr>
                        <tr>
                            <td class="align-middle"><h4 class="table-text">4</h4></td>
                            <td class="align-middle"><a target="_blank" href=" "><h4 class="table-text">
                                <img src="colodax.png" class="exchange-logo" /><span class="exchange-name ">Colodax</span></h4></a></td>
                            <td class="align-middle"><h4 class="table-text">₹ 25,83,138</h4></td>
                            <td class="align-middle"><h4 class="table-text"><span>₹ 25,75,167 / ₹ 26,08,984</span></h4></td>
                            <td class="align-middle"><h4 class="table-text color-red">-10.55 % %</h4></td>
                            <td class="align-middle"><h4 class="table-text color-red">▼ ₹  3,04,601</h4></td>
                        </tr>
                        <tr>
                            <td class="align-middle"><h4 class="table-text">5</h4></td>
                            <td class="align-middle"><a target="_blank" href=""><h4 class="table-text">
                                <img src="zebpay.png" class="exchange-logo" /><span class="exchange-name">Zebpay</span></h4></a></td>
                            <td class="align-middle"><h4 class="table-text">₹ 29,48,000</h4></td>
                            <td class="align-middle"><h4 class="table-text"><span>₹ 29,48,000  / ₹ 29,44,000</span></h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">2.09 %</h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">▲ ₹ 60,261</h4></td>
                        </tr>
                        <tr>
                            <td class="align-middle"><h4 class="table-text">6</h4></td>
                            <td class="align-middle"><a target="_blank" href=" "><h4 class="table-text">
                                <img src="coibdcx.png" class="exchange-logo" /><span class="exchange-name">CoinDCX</span></h4></a></td>
                            <td class="align-middle"><h4 class="table-text">₹ 29,43,251</h4></td>
                            <td class="align-middle"><h4 class="table-text"><span>₹ 29,42,000 / ₹ 29,45,882</span></h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">1.92 %</h4></td>
                            <td class="align-middle"><h4 class="table-text color-green">▲ ₹ 55,512</h4></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="padding-header" style={{ padding: "20px" }}>
                <a target="_blank" href="https://ftx.com/#a=finstreet">
                    <img src="BannerFTXNews.png" style={{ width: "100%" }} /></a>
            </div>
            <Footer />
        <div  style={{border:"solid 1px #191d28","background-color":"#191d28",position:"fixed",left:"0","align-items":"center",width:"100vw",height:"47px",bottom:"0","z-index":"8"}}></div>
        </div>

        </React.Fragment>
    )
};
