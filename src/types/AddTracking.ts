//
// Imports
//

import 
{ 
	PayPalError,
	PayPalHATEOASLink, 
} from "./Shared.js";

//
// Interfaces
//

/** The add tracking information for multiple PayPal transactions response details. */
export interface PayPalBatchTrackerCollection
{
	/**
	 * The batch header.
	 * 
	 * 1 to 100 items.
	 */
	tracker_identifiers? : PayPalTrackingIdentifier[];

	/**
	 * An array of error responses.
	 * 
	 * 1 to 100 items.
	 */
	errors? : PayPalError[];

	/** An array of request-related HATEOAS links. */
	links? : PayPalHATEOASLink[];
}

/** The tracking information for a shipment. */
export interface PayPalTracker
{
	/**
	 * The PayPal transaction ID.
	 * 
	 * 1 to 50 characters.
	 */
	transaction_id : string;

	/**
	 * The tracking number for the shipment.
	 * 
	 * 1 to 64 characters.
	 */
	tracking_number? : string;

	/**
	 * The name of the carrier for the shipment.
	 * 
	 * Provide this value only if the carrier parameter is OTHER.
	 * 
	 * 1 to 64 characters.
	 */
	carrier_name_other? : string;

	/**
	 * The postage payment ID.
	 * 
	 * 1 to 64 characters.
	 */
	postage_payment_id? : string;

	/**
	 * If true , sends an email notification to the buyer of the PayPal transaction. The email contains the tracking information that was uploaded through the API.
	 * 
	 * Defaults to false.
	 */
	notify_buyer? : boolean;

	/** The quantity of items shipped. */
	quantity? : number;

	/** Indicates whether the carrier validated the tracking number. */
	tracking_number_validated? : boolean;

	/** To denote whether the shipment is sent forward to the receiver or returned back. */
	shipment_direction? : PayPalTrackerShipmentDirection;

	/** To denote which party uploaded the shipment tracking info. */
	shipment_uploader? : PayPalTrackerShipmentUploader;

	/** An array of request-related HATEOAS links. */
	links? : PayPalHATEOASLink[];

	/** The type of tracking number. */
	tracking_number_type : PayPalTrackerTrackingNumberType;

	/** The status of the item shipment. */
	status : PayPalTrackerStatus;

	/**
	 * The stand-alone date, in Internet date and time format. 
	 * 
	 * To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. 
	 * 
	 * Whenever possible, use the standard date_time type. 
	 * 
	 * This regular expression does not validate all dates. 
	 * 
	 * For example, February 31 is valid and nothing is known about leap years.
	 * 
	 * @see https://tools.ietf.org/html/rfc3339#section-5.6
	 * 
	 * 10 characters.
	 */
	shipment_date : string;

	/** The carrier for the shipment. */
	carrier : PayPalTrackerCarrier;

	/**
	 * The date and time, in Internet date and time format. 
	 * 
	 * Seconds are required while fractional seconds are optional.
	 * 
	 * @see https://tools.ietf.org/html/rfc3339#section-5.6
	 * 
	 * 20 to 64 characters.
	 */
	last_updated_time : string;
}

/** The add tracking information for one or more transactions response details. */
export interface PayPalTrackerCollection
{
	/**
	 * An array of tracking information for shipments.
	 * 
	 * 1 to 20 items.
	 */
	trackers? : unknown[];

	/**	An array of request-related HATEOAS links. */
	links? : PayPalHATEOASLink[];
}

/** The tracking identifiers for a shipment. */
export interface PayPalTrackingIdentifier
{
	/**
	 * The PayPal transaction ID.
	 * 
	 * 1 to 50 characters.
	 */
	transaction_id : string;

	/**
	 * The tracking number for the shipment.
	 * 
	 * 1 to 64 characters.
	 */
	tracking_number? : string;

	/** An array of request-related HATEOAS links. */
	links? : PayPalHATEOASLink[];
}

//
// Types
//

/**
 * The carrier for the shipment. 
 * 
 * Some carriers have a global version as well as local subsidiaries. 
 * 
 * The subsidiaries are repeated over many countries and might also have an entry in the global list. 
 * 
 * Choose the carrier for your country. 
 * 
 * If the carrier is not available for your country, choose the global version of the carrier. 
 * 
 * If your carrier name is not in the list, set carrier to OTHER and set carrier name in carrier_name_other. 
 * 
 * @see https://developer.paypal.com/docs/tracking/reference/carriers/
 */
export type PayPalTrackerCarrier = "2EBOX" | "360LION" | "3JMSLOGISTICS" | "4_72" | "6LS" | "A1POST" | "AAA_COOPER" | "ABCUSTOM" | "ABXEXPRESS_MY" | "ACOMMMERCE" | "ACSWORLDWIDE" | "ACS_GR" | "ADERONLINE" | "ADICIONAL" | "ADSONE" | "ADUIEPYLE" | "AERONET" | "AEX" | "AFLLOG_FTP" | "AGILITY" | "AIRMEE_WEBHOOK" | "AIR_CANADA_GLOBAL" | "ALFATREX" | "ALLIEDEXPRESS" | "ALLJOY" | "ALPHAFAST" | "ALWAYS_EXPRESS" | "AMAZON" | "AMAZON_FBA_SWISHIP" | "AMAZON_SHIP_MCF" | "AMSTAN" | "AMS_GRP" | "ANDREANI" | "ANICAM_BOX" | "ANJUN" | "ANSERX" | "AN_POST" | "AO_COURIER" | "AO_DEUTSCHLAND" | "APC_OVERNIGHT" | "APC_OVERNIGHT_CONNUM" | "APG" | "APRISAEXPRESS" | "AQUILINE" | "ARAMEX" | "ARAMEX_AU" | "ARCO_SPEDIZIONI" | "ARE_EMIRATES_POST" | "ARG_OCA" | "ARK_LOGISTICS" | "ASE" | "ASENDIA_HK" | "ASENDIA_UK" | "ASENDIA_USA" | "ASIGNA" | "AUPOST_CN" | "AUSTRIAN_POST_EXPRESS" | "AUS_STARTRACK" | "AUS_TOLL" | "AU_AUSTRIAN_POST" | "AU_AU_POST" | "AU_TNT" | "AVERITT" | "BEL_DHL" | "BEL_RS" | "BESTWAYPARCEL" | "BE_BPOST" | "BE_KIALA" | "BG_BULGARIAN_POST" | "BH_POSTA" | "BH_WORLDWIDE" | "BIRDSYSTEM" | "BJSHOMEDELIVERY" | "BLINKLASTMILE" | "BLR_BELPOST" | "BLUECARE" | "BLUESTAR" | "BLUEX" | "BNEED" | "BOMBINOEXP" | "BOND" | "BONDSCOURIERS" | "BORDEREXPRESS" | "BOX_BERRY" | "BPOST_INT" | "BRA_CORREIOS" | "BRING" | "BROUWER_TRANSPORT" | "BRT_IT" | "BRT_IT_PARCELID" | "BRT_IT_SENDER_REF" | "BUDBEE_WEBHOOK" | "BUYLOGIC" | "B_TWO_C_EUROPE" | "CAE_DELIVERS" | "CAINIAO" | "CARIBOU" | "CARRIERS" | "CARRY_FLAP" | "CA_CANADA_POST" | "CA_CANPAR" | "CA_GREYHOUND" | "CA_PUROLATOR" | "CBL_LOGISTICA" | "CDEK" | "CDEK_TR" | "CELERITAS" | "CELLO_SQUARE" | "CESKA_CZ" | "CEVA" | "CFL_LOGISTICS" | "CGS_EXPRESS" | "CHAMPION_LOGISTICS" | "CHITCHATS" | "CHOIR_EXP" | "CHROBINSON" | "CHRONOPOST_FR" | "CHUKOU1" | "CH_SWISS_POST_PRIORITY" | "CITYLINK_MY" | "CJPACKET" | "CJ_CENTURY" | "CJ_GLS" | "CJ_HK_INTERNATIONAL" | "CJ_INT_MY" | "CJ_KR" | "CJ_LOGISTICS" | "CJ_TH" | "CLEVY_LINKS" | "CLE_LOGISTICS" | "CLOUDWISH_ASIA" | "CNDEXPRESS" | "CNEXPS" | "CNWANGTONG" | "CN_17POST" | "CN_BESTEXPRESS" | "CN_BOXC" | "CN_CHINA_POST_EMS" | "CN_DPEX" | "CN_EMS" | "CN_EQUICK" | "CN_GOFLY" | "CN_JCEX" | "CN_PAYPAL_PACKAGE" | "CN_POST56" | "CN_SF_EXPRESS" | "CN_STO" | "CN_WEDO" | "CN_WISHPOST" | "CN_YUNDA" | "COLIS_PRIVE" | "COLLECTCO" | "COLLIVERY" | "COMET_TECH" | "CONTINENTAL" | "CON_WAY" | "COORDINADORA" | "COPA_COURIER" | "COPE" | "CORPORATECOURIERS_WEBHOOK" | "CORREOS_DE_MEXICO" | "CORREOS_ES" | "CORREOS_EXPRESS" | "CORREO_UY" | "COSTMETICSNOW" | "COURANT_PLUS" | "COUREX" | "COURIERS_PLEASE" | "CPACKET" | "CPEX" | "CROSHOT" | "CSE" | "CTC_EXPRESS" | "CUBYN" | "CUCKOOEXPRESS" | "CYPRUS_POST_CYP" | "DAIGLOBALTRACK" | "DAJIN" | "DANSKE_FRAGT" | "DAWN_WING" | "DAYTON_FREIGHT" | "DBSCHENKER_B2B" | "DBSCHENKER_SE" | "DBSCHENKER_SV" | "DDEXPRESS" | "DEALERSEND" | "DELIVERYONTIME" | "DELNEXT" | "DELTEC_UK" | "DEMANDSHIP" | "DESCARTES" | "DESIGNERTRANSPORT_WEBHOOK" | "DESTINY" | "DEX_I" | "DE_ASENDIA" | "DE_DEUTSCHE" | "DE_DEUTSCHE_POST_DHL_WITHIN_EUROPE_TRACKNET" | "DE_DHL_EXPRESS" | "DE_DPD_DELISTRACK" | "DE_GLS" | "DHL" | "DHL_ACTIVE_TRACING" | "DHL_AU" | "DHL_BENELUX" | "DHL_ECOMERCE_ASA" | "DHL_ES" | "DHL_FR" | "DHL_FREIGHT" | "DHL_GLOBAL_MAIL_ASIA" | "DHL_HK" | "DHL_JP" | "DHL_PARCEL_ES" | "DHL_PARCEL_NL" | "DHL_PARCEL_RU" | "DHL_PL" | "DHL_REFR" | "DHL_SG" | "DHL_SUPPLY_CHAIN" | "DHL_UK" | "DIAMOND_EUROGISTICS" | "DICOM" | "DIDADI" | "DIMERCO" | "DIRECTCOURIERS" | "DIRECTLOG" | "DIRECTPARCELS" | "DMM_NETWORK" | "DMS_MATRIX" | "DOBROPOST" | "DOORA" | "DOORDASH_WEBHOOK" | "DPD" | "DPD_DELISTRACK" | "DPD_FR" | "DPD_HGRY" | "DPD_HK" | "DPD_IR" | "DPD_LOCAL" | "DPD_LOCAL_REF" | "DPD_POLAND" | "DPD_RO" | "DPD_RU" | "DPEX" | "DPE_EXPRESS" | "DPE_SOUTH_AFRC" | "DSV" | "DTDC_AU" | "DTDC_EXPRESS" | "DTDC_IN" | "DTD_EXPR" | "DX_SFTP" | "DYLT" | "DYNALOGIC" | "EASY_MAIL" | "ECEXPRESS" | "ECHO" | "ECMS" | "ECOSCOOTING" | "EFEX" | "EFS" | "EKART" | "ELIAN_POST" | "EMPS_CN" | "ENDEAVOUR_DELIVERY" | "ENVIALIA_REFERENCE" | "EPARCEL_KR" | "EPST_GLBL" | "EP_BOX" | "ESHIPPING" | "ESP_ASM" | "ESP_ENVIALIA" | "ESP_MRW" | "ESP_NACEX" | "ESP_PACKLINK" | "ESP_REDUR" | "ETOMARS" | "ETOTAL" | "ETS_EXPRESS" | "EU_FLEET_SOLUTIONS" | "EU_IMX" | "EXPRESSSALE" | "EZSHIP" | "FARGOOD" | "FAR_INTERNATIONAL" | "FASTRACK" | "FASTRK_SERV" | "FASTWAY_IR" | "FASTWAY_NZ" | "FDSEXPRESS" | "FEDEX" | "FEDEX_CROSSBORDER" | "FEDEX_FR" | "FEDEX_INTL_MLSERV" | "FEDEX_POLAND" | "FEDEX_UK" | "FETCHR_WEBHOOK" | "FIEGE" | "FIEGE_NL" | "FIRSTMILE" | "FLASHEXPRESS" | "FMX" | "FONSEN" | "FORRUN" | "FREIGHTQUOTE" | "FRETERAPIDO" | "FR_BERT" | "FR_COLIS" | "FR_EXAPAQ" | "FR_GEODIS" | "FR_GLS" | "FULFILLA" | "FULFILLME" | "FURDECO" | "GAC" | "GANGBAO" | "GBA" | "GBS_BROKER" | "GB_APC" | "GB_ARROW" | "GB_NORSK" | "GB_PANTHER" | "GB_TUFFNELLS" | "GEIS" | "GEL_EXPRESS" | "GEMWORLDWIDE" | "GENERAL_OVERNIGHT" | "GENIKI_GR" | "GEODIS_ESPACE" | "GESWL" | "GIAO_HANG" | "GIO_EXPRESS" | "GLOBALTRANZ" | "GLOBAL_ABF" | "GLOBAL_ESTES" | "GLOBAL_EXPRESS" | "GLOBAL_IPARCEL" | "GLOBAL_TNT" | "GLOBAVEND" | "GLS_CROTIA" | "GLS_CZ" | "GLS_IT" | "GLS_ITALY" | "GLS_SLOV" | "GLS_SLOVEN" | "GOGLOBALPOST" | "GOJEK" | "GRAB_WEBHOOK" | "GRUPO" | "GR_ELTA" | "GSI_EXPRESS" | "GSO" | "HAPPY2POINT" | "HCT_LOGISTICS" | "HDB" | "HDB_BOX" | "HELLMANN" | "HELTHJEM" | "HEPPNER" | "HEPPNER_FR" | "HERMES" | "HERMES_2MANN_HANDLING" | "HERMES_DE" | "HH_EXP" | "HIPSHIPPER" | "HKD" | "HK_FLYT_EXPRESS" | "HK_FOUR_PX_EXPRESS" | "HK_POST" | "HK_TGX" | "HOLISOL" | "HOME_DELIVERY_SOLUTIONS" | "HOUNDEXPRESS" | "HRPARCEL" | "HRV_HRVATSKA" | "HUAHAN_EXPRESS" | "HUNTER_EXPRESS" | "HUODULL" | "HX_EXPRESS" | "IBEONE" | "ICUMULUS" | "IDEXPRESS" | "IDN_JNE" | "IDN_LION_PARCEL" | "IDN_PANDU" | "IML" | "INDOPAKET" | "IND_BLUEDART" | "IND_DELHIVERY" | "IND_DELIVREE" | "IND_DOTZOT" | "IND_ECOM" | "IND_FIRSTFLIGHT" | "IND_GATI" | "IND_GOJAVAS" | "IND_JAYONEXPRESS" | "IND_PROFESSIONAL_COURIERS" | "IND_SAFEEXPRESS" | "IND_XPRESSBEES" | "INPOST_PACZKOMATY" | "INTEGRA2_FTP" | "INTELIPOST" | "INTEL_VALLEY" | "INTERPARCEL_AU" | "INTERPARCEL_NZ" | "INTERPARCEL_UK" | "INTEXPRESS" | "ISRAEL_POST" | "ISR_POST_DOMESTIC" | "IT_DHL_ECOMMERCE" | "IT_FERCAM" | "IT_NEXIVE" | "IT_POSTE_ITALIA" | "IT_TNT" | "IVOY_WEBHOOK" | "I_DIKA" | "JANCO" | "JANIO" | "JERSEY_POST" | "JET_SHIP" | "JINDOUYUN" | "JINSUNG" | "JOCOM" | "JOOM_LOGIS" | "JOYING_BOX" | "JPN_JAPAN_POST" | "JPN_SAGAWA" | "JP_KURO_NEKO_YAMATO_UNYUU" | "JS_EXPRESS" | "JTEXPRESS" | "JTEXPRESS_VN" | "JX" | "J_NET" | "K1_EXPRESS" | "KANGAROO_MY" | "KEC" | "KERRYTJ" | "KERRYTTC_VN" | "KERRY_ECOMMERCE" | "KGMHUB" | "KHM_CAMBODIA_POST" | "KOR_ECARGO" | "KPOST" | "KR_KOREA_POST" | "KUEHNE" | "KURASI" | "KWE_GLOBAL" | "KWT" | "KYUNGDONG_PARCEL" | "KY_EXPRESS" | "LALAMOVE" | "LANDMARK_GLOBAL" | "LANDMARK_GLOBAL_REFERENCE" | "LAO_POST" | "LATVIJAS_PASTS" | "LA_POSTE_SUIVI" | "LBCEXPRESS_FTP" | "LEADER" | "LEGION_EXPRESS" | "LEXSHIP" | "LHT_EXPRESS" | "LICCARDI_EXPRESS" | "LIEFERY" | "LINE" | "LINKBRIDGE" | "LOCUS_WEBHOOK" | "LOGISTERS" | "LOGISTICSWORLDWIDE_HK" | "LOGISTIKA" | "LOGISTYX_TRANSGROUP" | "LONESTAR" | "LOOMIS_EXPRESS" | "LOTTE" | "LTIANEXP" | "LTL" | "LTU_LIETUVOS" | "MAGYAR_HU" | "MAILAMERICAS" | "MAILPLUS_JPN" | "MAIL_PLUS" | "MAINFREIGHT" | "MAINWAY" | "MARA_XPRESS" | "MATDESPATCH" | "MATKAHUOLTO" | "MBW" | "MEX_AEROFLASH" | "MEX_ESTAFETA" | "MEX_REDPACK" | "MEX_SENDA" | "MGLOBAL" | "MIKROPAKKET" | "MIKROPAKKET_BE" | "MILKMAN" | "MORE_LINK" | "MORNING_EXPRESS" | "MRW_FTP" | "MXE" | "MX_CARGO" | "MYHERMES" | "MYS_AIRPAK" | "MYS_EMS" | "MYS_GDEX" | "MYS_MYPOST_ONLINE" | "MYS_MYS_POST" | "MYS_SKYNET" | "M_XPRESS" | "NACEX" | "NACEX_ES" | "NANJINGWOYUAN" | "NATIONAL_SAMEDAY" | "NATIONEX" | "NATIONWIDE_MY" | "NEWAY" | "NEWEGGEXPRESS" | "NEWGISTICS" | "NEWZEALAND_COURIERS" | "NG_COURIERPLUS" | "NHANS_SOLUTIONS" | "NIM_EXPRESS" | "NINJAVAN_ID" | "NINJAVAN_MY" | "NINJAVAN_SG" | "NINJAVAN_THAI" | "NINJAVAN_WB" | "NIPOST_NG" | "NLD_DHL" | "NLD_GLS" | "NLD_POSTNL" | "NLD_TRANSMISSION" | "NOVA_POSHTA" | "NOVA_POSHTA_INT" | "NOX_NACHTEXPRESS" | "NOX_NIGHT_TIME_EXPRESS" | "NTLOGISTICS_VN" | "NZ_COURIER_POST" | "NZ_NZ_POST" | "OCS" | "OCS_WORLDWIDE" | "OKAYPARCEL" | "OMNIPARCEL" | "OMNIVA" | "ONECLICK" | "ONEWORLDEXPRESS" | "ORANGE_DS" | "OSM_WORLDWIDE" | "OVERSE_EXP" | "P2P_TRC" | "PAACK_WEBHOOK" | "PADTF" | "PAGO" | "PALEXPRESS" | "PALLETWAYS" | "PALLET_NETWORK" | "PANTHER_REFERENCE" | "PAN_ASIA" | "PAPERFLY" | "PAPER_EXPRESS" | "PAQUETEXPRESS" | "PARCEL2GO" | "PARCELINKLOGISTICS" | "PARCELLED_IN" | "PARCELONE" | "PARCELPAL_WEBHOOK" | "PARCELPOINT" | "PARCELPOST_SG" | "PARCEL_2_POST" | "PARKNPARCEL" | "PCFCORP" | "PFCEXPRESS" | "PFLOGISTICS" | "PHL_AIR21" | "PHL_AIRSPEED" | "PHL_JAMEXPRESS" | "PICKRR" | "PICKUP" | "PICKUPP_MYS" | "PICKUPP_SGP" | "PILOT_FREIGHT" | "PIL_LOGISTICS" | "PITNEY_BOWES" | "PITTOHIO" | "PIXSELL" | "PLANZER" | "PLUS_LOG_UK" | "PL_POCZTA_POLSKA" | "POL_SIODEMKA" | "PONY_EXPRESS" | "POSTA_PLUS" | "POSTA_RO" | "POSTA_UKR" | "POSTEN_NORGE" | "POSTI" | "POSTNL_INTL_3S" | "POSTNL_INT_3_S" | "POSTNORD_LOGISTICS" | "POSTNORD_LOGISTICS_DK" | "POSTUR_IS" | "POST_SERBIA" | "POST_SLOVENIA" | "PRESIDENT_TRANS" | "PRESSIODE" | "PRIMAMULTICIPTA" | "PROMEDDELIVERY" | "PRT_CHRONOPOST" | "PRT_CTT" | "PRT_INT_SEUR" | "PRT_SEUR" | "PTS" | "PTT_POST" | "QUANTIUM" | "QWINTRY" | "RABEN_GROUP" | "RAF_PH" | "RAIDEREX" | "RAM" | "RCL" | "RINCOS" | "RL_US" | "ROADBULL" | "ROADRUNNER_FREIGHT" | "ROCKET_PARCEL" | "ROUTIFIC_WEBHOOK" | "ROYAL_MAIL" | "RPD2MAN" | "RPX" | "RPXLOGISTICS" | "RPX_ID" | "RUSSIAN_POST" | "RUSTON" | "RZYEXPRESS" | "SAIA_FREIGHT" | "SAILPOST" | "SAP_EXPRESS" | "SAU_SAUDI_POST" | "SCUDEX_EXPRESS" | "SDA_IT" | "SDH_SCM" | "SEFL" | "SEINO" | "SEKOLOGISTICS" | "SEKO_SFTP" | "SENDING" | "SENDIT" | "SENDLE" | "SEUR_ES" | "SEUR_SP_API" | "SFB2C" | "SFCSERVICE" | "SFC_LOGISTICS" | "SFPLUS_WEBHOOK" | "SF_EX" | "SG_DETRACK" | "SG_QXPRESS" | "SG_SG_POST" | "SG_SPEEDPOST" | "SG_TAQBIN" | "SHENZHEN" | "SHIPENTEGRA" | "SHIPPIT" | "SHIPTER" | "SHIPTOR" | "SHIP_GATE" | "SHIP_IT_ASIA" | "SHOPFANS" | "SHREENANDANCOURIER" | "SHREETIRUPATI" | "SHREE_ANJANI_COURIER" | "SHREE_MARUTI" | "SIMPLYPOST" | "SINOTRANS" | "SIN_GLBL" | "SKYBOX" | "SKYNET_UAE" | "SKYNET_UK" | "SKYNET_WORLDWIDE" | "SKYNET_ZA" | "SKY_POSTAL" | "SK_POSTA" | "SMG_EXPRESS" | "SMOOTH" | "SMSA_EXPRESS" | "SONICTL" | "SOUTH_AFRICAN_POST_OFFICE" | "SPEEDCOURIERS_GR" | "SPEEDEE" | "SPEEDEXCOURIER" | "SPOTON" | "SPRING_GDS" | "SRE_KOREA" | "STALLIONEXPRESS" | "STARKEN" | "STAR_TRACK_EXPRESS" | "STAR_TRACK_NEXT_FLIGHT" | "STEPFORWARDFS" | "STONE3PL" | "STRECK_TRANSPORT" | "SUTTON" | "SWE_POSTNORD" | "SWISHIP_DE" | "SWISS_POST_FTP" | "SYPOST" | "SZENDEX" | "TAQBIN_HK" | "TAQBIN_MY" | "TARRIVE" | "TAZMANIAN_FREIGHT" | "TCK_EXPRESS" | "TCS" | "TFM" | "TFORCE_FINALMILE" | "THABIT_LOGISTICS" | "THA_DYNAMIC_LOGISTICS" | "THA_KERRY" | "THA_THAILAND_POST" | "THECOURIERGUY" | "THEDELIVERYGROUP" | "THENILE_WEBHOOK" | "TIGFREIGHT" | "TIKI_ID" | "TIPSA" | "TNT" | "TNT_CLICK_IT" | "TNT_FR" | "TNT_NL" | "TNT_REFR" | "TNT_UK" | "TNT_UK_REFR" | "TOLL" | "TOLL_NZ" | "TOLOS" | "TOPHATTEREXPRESS" | "TOPYOU" | "TOTAL_EXPRESS" | "TOURLINE" | "TRACKON" | "TRANS_KARGO" | "TRUMPCARD" | "TRUNKRS_WEBHOOK" | "TUFFNELLS_REFERENCE" | "TWO_GO" | "TW_TAIWAN_POST" | "UBI_LOGISTICS" | "UC_EXPRE" | "UDS" | "UK_COLLECTPLUS" | "UK_DPD" | "UK_NIGHTLINE" | "UK_PARCELFORCE" | "UK_UK_MAIL" | "UK_XDP" | "UK_YODEL" | "UPS" | "UPS_FREIGHT" | "UPS_MAIL_INNOVATIONS" | "UPS_REFERENCE" | "USF_REDDAWAY" | "USHIP" | "USPS" | "US_ENSENDA" | "US_GLOBEGISTICS" | "US_LASERSHIP" | "US_OLD_DOMINION" | "US_ONTRAC" | "US_YRC" | "VAMOX" | "VENIPAK" | "VIAEUROPE" | "VIA_EXPRESS" | "VIRTRANSPORT" | "VIWO" | "VNM_VIETNAM_POST" | "VNM_VIETTELPOST" | "WAHANA_ID" | "WANBEXPRESS" | "WEASHIP" | "WEPOST" | "WESTBANK_COURIER" | "WESTGATE_GL" | "WHISTL" | "WINIT" | "WISELOADS" | "WISE_EXPRESS" | "WIZMO" | "WMG" | "WNDIRECT" | "WYNGS" | "XDE_WEBHOOK" | "XDP_UK_REFERENCE" | "XL_EXPRESS" | "XPERT_DELIVERY" | "XPOST" | "XPO_LOGISTICS" | "XPRESSEN_DK" | "XQ_EXPRESS" | "YAKIT" | "YANWEN" | "YDH_EXPRESS" | "YINGNUO_LOGISTICS" | "YODEL_DIR" | "YODEL_INTNL" | "YTO" | "YUNEXPRESS" | "YURTICI_KARGO" | "YUSEN" | "ZAJIL_EXPRESS" | "ZA_COURIERIT" | "ZA_FASTWAY" | "ZA_SPECIALISED_FREIGHT" | "ZEEK_2_DOOR" | "ZELERIS" | "ZEPTO_EXPRESS" | "ZES_EXPRESS" | "ZIINGFINALMILE" | "ZINC" | "ZJS_EXPRESS" | "ZTO_EXPRESS" | "ZYLLEM"

/** 
 * To denote whether the shipment is sent forward to the receiver or returned back. 
 * 
 * FORWARD: The shipment is sent forward to the receiver.
 * RETURN: The shipment was returned back. 
 */
export type PayPalTrackerShipmentDirection = "FORWARD" | "RETURN";

/** 
 * To denote which party uploaded the shipment tracking info. 
 * 
 * MERCHANT: The tracking info uploader is the merchant selling the goods and shipping it to the buyer or the payment receiver of the transaction.
 * CONSUMER: The tracking info uploader is the consumer receiving the goods that was shipped by the merchant or the payment sender of the transaction.
 * PARTNER: The tracking info uploader is the partner or marketplace or shipment facilitator who is uploading the tracking info on behalf of the merchant or consumer. 
 */
export type PayPalTrackerShipmentUploader = "MERCHANT" | "CONSUMER" | "PARTNER";

/**
 * The type of tracking number.
 * 
 * CARRIER_PROVIDED: A merchant-provided tracking number.
 * E2E_PARTNER_PROVIDED: A marketplace-provided tracking number.
 */
export type PayPalTrackerTrackingNumberType = "CARRIER_PROVIDED" | "E2E_PARTNER_PROVIDED";

/**
 * The status of the item shipment.
 * 
 * @see https://developer.paypal.com/docs/tracking/reference/shipping-status/
 * 
 * CANCELLED: The shipment was cancelled and the tracking number no longer applies.
 * DELIVERED: The item was already delivered when the tracking number was uploaded.
 * LOCAL_PICKUP: Either the buyer physically picked up the item or the seller delivered the item in person without involving any couriers or postal companies.
 * ON_HOLD: The item is on hold. Its shipment was temporarily stopped due to bad weather, a strike, customs, or another reason.
 * SHIPPED: The item was shipped and is on the way. 
 */
export type PayPalTrackerStatus = "CANCELLED" | "DELIVERED" | "LOCAL_PICKUP" | "ON_HOLD" | "SHIPPED";