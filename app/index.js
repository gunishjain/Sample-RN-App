import {StatusBar} from 'expo-status-bar';
import { Text,View } from 'react-native';
import { Link } from 'expo-router'


export default function App(){
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-5xl font-pblack">Hello DEWDS</Text>
            <StatusBar style='auto'/>
            <Link href="/home" style={{color: 'blue'}}>Go To Home</Link>
        </View>
    );
}
