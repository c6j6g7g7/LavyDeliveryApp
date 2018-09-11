import { Dimensions, Platform} from 'react-native'
import { REDCOLOR } from '../config/const';

const { width, height } = Dimensions.get('window');

export const container = {
	width 	: width,
	height 	: height,
	backgroundColor: 'green'
}

export const InputContainer = {
  width  : width,
  height :  45,
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 15,
  marginBottom: 15
}

export const InputStyle = {
	width : width - 30,
	height : (Platform.OS === 'ios') ? 40 : 52,
	marginTop: 15,
	marginBottom: 15,
	borderBottomColor : 'white',
	borderBottomWidth : 2,
	fontSize : 24,
	color :  '#187cd4',
	marginLeft : 15
}

export const button = {
	width : width - 30,
	height : 42,
	marginTop : 15,
	marginBottom : 15,
	marginLeft : 15,
	flexDirection : 'row',
	alignItems : 'center',
	justifyContent : 'center',
	borderRadius : 3
}

export const button_text ={
	color : 'white',
	fontSize: 22
}



export const container_logon = {
		flex:1,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
	}

export const	logo = {
		width: '35%',
		height: '10%',
		marginBottom: 20,
		alignItems: 'center',
		justifyContent: 'center',
	}

	/*const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 300,
      height: 150
    },
    icon: {
      position: 'relative',
      height: 45,
      width: 45,
      alignItems: 'center',

    },*/
  export const box = {
      flex: 1,
			flexDirection: 'row'
			
    }

		export const badgeText= {
			fontSize: 18
		}	

		export const loading = {
			flex:1,
			fontSize: 38,
			alignItems: 'center',
      justifyContent: 'center'

		}

		
