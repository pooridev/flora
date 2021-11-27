const HOST = window.location.hostname;
const isProduction = HOST === 'flora.com';
export const Configs = {
	API_URL: isProduction ? 'http://194.5.193.96:8050' : 'http://194.5.193.96:8050',
	SALT: isProduction ? 'EAB8r*H!@M#k8swB6YT-D=J_xMU2S8F5?5beLQWXgj=vn_g7RXkY$2mmQNDxEKCUnq+Z*NFRYkP^S&Pxn_%b*&FZs9!azWP&KjH-seE84S57U_?sVmP*rq=^S_&!vhur' : 'MY_SALT',
	LIMIT: 8,
	IS_PRODUCTION: isProduction
};
