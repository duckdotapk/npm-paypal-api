// noinspection SpellCheckingInspection

//
// Type
//

/** @see https://developer.paypal.com/docs/api/orders/v2/#definition-processor_response */
export interface PayPalProcessorResponse
{
	avs_code? : "0" | "1" | "2" | "3" | "4" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "I" | "M" | "N" | "P" | "R" | "S" | "U" | "W" | "X" | "Y" | "Z" | "Null";

	cvv_code? : "0" | "1" | "2" | "3" | "4" | "E" | "I" | "M" | "N" | "P" | "S" | "U" | "X" | string;

	response_code? : "1000" | "1300" | "1310" | "1312" | "1317" | "1320" | "1330" | "1335" | "1340" | "1350" | "1352" | "1360" | "1370" | "1380" | "1382" | "1384" | "1390" | "1393" | "5100" | "5110" | "5120" | "5130" | "5135" | "5140" | "5150" | "5160" | "5170" | "5180" | "5190" | "5200" | "5210" | "5400" | "5500" | "5650" | "5700" | "5710" | "5800" | "5900" | "5910" | "5920" | "5930" | "5950" | "6300" | "7600" | "7700" | "7710" | "7800" | "7900" | "8000" | "8010" | "8020" | "8030" | "8100" | "8110" | "8220" | "9100" | "9500" | "9510" | "9520" | "9530" | "9540" | "9600" | "0000" | "00N7" | "0100" | "0390" | "0500" | "0580" | "0800" | "0880" | "0890" | "0960" | "0R00" | "10BR" | "PCNR" | "PCVV" | "PP06" | "PPRN" | "PPAD" | "PPAB" | "PPAE" | "PPAG" | "PPAI" | "PPAR" | "PPAU" | "PPAV" | "PPAX" | "PPBG" | "PPC2" | "PPCE" | "PPCO" | "PPCR" | "PPCT" | "PPCU" | "PPD3" | "PPDC" | "PPDI" | "PPDV" | "PPDT" | "PPEF" | "PPEL" | "PPER" | "PPEX" | "PPFE" | "PPFI" | "PPFR" | "PPFV" | "PPGR" | "PPH1" | "PPIF" | "PPII" | "PPIM" | "PPIT" | "PPLR" | "PPLS" | "PPMB" | "PPMC" | "PPMD" | "PPNC" | "PPNL" | "PPNM" | "PPNT" | "PPPH" | "PPPI" | "PPPM" | "PPQC" | "PPRE" | "PPRF" | "PPRR" | "PPS0" | "PPS1" | "PPS2" | "PPS3" | "PPS4" | "PPS5" | "PPS6" | "PPSC" | "PPSD" | "PPSE" | "PPTE" | "PPTF" | "PPTI" | "PPTR" | "PPTT" | "PPTV" | "PPUA" | "PPUC" | "PPUE" | "PPUI" | "PPUP" | "PPUR" | "PPVC" | "PPVE" | "PPVT";

	payment_advice_code? : "21" | "01" | "02" | "03";
}