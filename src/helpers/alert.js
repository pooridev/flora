import Swal from 'sweetalert2';
export const CustomAlert = ({icon = 'info', title = '', text = '', ...other}) => {
	return Swal.fire({
		icon,
		title,
		text,
		...other
	})
}
