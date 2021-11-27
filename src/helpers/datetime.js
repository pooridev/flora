import moment from 'moment';

export const HumanDateTime = (date) => date ?  moment(date).fromNow() : '-';
export const FullDateTime = (date) => date ? moment(date).format('YYYY/MM/DD HH:mm:ss') : '-';
export const FullDate = (date, format = 'YYYY/MM/DD') => date ? moment(date).format(format) : '-';
export const DateToIso = (date) => date ? moment(date, 'YYYY-MM-DD').toISOString() : '-';
export const DateToChartDate = (date) => date ? moment(date, 'YYYY-MM').format('MMMM YYYY') : '-'
