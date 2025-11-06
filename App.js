import React, {useState} from 'react';
import {Button, Alert, ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Define own Question component with appropriate parameters and display
const QuizQuestion = ({question}) => {
    return (
        <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{marginLeft: 10, color: 'white', fontSize: 30}}>{question}</Text>
        </View>
    );
};

const QuizApp = () => {
    let [q1, setq1] = useState('');
    let [q2, setq2] = useState('');
    let [q3, setq3] = useState('');
    let [q4, setq4] = useState('');

    return (
        <ScrollView style={{backgroundColor: 'black' ,marginTop: 40, marginBottom: 50}}>
            <Text style={{marginTop: 10, color: 'white', fontWeight: 'bold', fontSize: 47, textAlign: 'center'}}>Who's That Agent</Text>


            <QuizQuestion
                question='Who is this?'
            />
            <Image source={{uri:'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/51e62f3c74356a7501d06feba42ac643133257d7-616x822.png'}} style={{width:385, height: 513.75, alignSelf: 'center', borderWidth: 4, borderColor: 'red', marginBottom: 10}}/>
            <View style={{
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 8,
                overflow: 'hidden',
                marginVertical: 10,
            }}>
                <Picker onValueChange={(value) => {setq1(value)}} style={{ color: 'deepskyblue', borderColor:'white' }} dropdownIconColor="deepskyblue">
                    <Picker.Item label="Choose an agent" value="" enabled={false} />
                    <Picker.Item label="Omen" value= "Omen"></Picker.Item>
                    <Picker.Item label="Brimstone" value= "Brimstone"></Picker.Item>
                    <Picker.Item label="Clove" value= "Clove"></Picker.Item>
                    <Picker.Item label="Harbor" value= "Harbor"></Picker.Item>
                </Picker>
            </View>


            <QuizQuestion
                question='Who is this?'
            />
            <Image source={{uri:'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/477284dfe402a85abcf6b07512bcd6f01c8fe60e-616x822.png?'}} style={{width:385, height: 513.75, alignSelf: 'center', borderWidth: 4, borderColor: 'red', marginBottom: 10}}/>
            <View style={{
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 8,
                overflow: 'hidden',
                marginVertical: 10,
            }}>
                <Picker onValueChange={(value) => {setq2(value)}} style={{ color: 'deepskyblue', borderColor:'white' }} dropdownIconColor="deepskyblue">
                    <Picker.Item label="Choose an agent" value="" enabled={false} />
                    <Picker.Item label="Deadlock" value= "Deadlock"></Picker.Item>
                    <Picker.Item label="Chamber" value= "Chamber"></Picker.Item>
                    <Picker.Item label="Sage" value= "Sage"></Picker.Item>
                    <Picker.Item label="Vyse" value= "Vyse"></Picker.Item>
                </Picker>
            </View>


            <QuizQuestion
                question='Who is this?'
            />
            <Image source={{uri:'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/14145d7bf9be17afa80c04ee4fbe200076cc1769-616x822.png?'}} style={{width:385, height: 513.75, alignSelf: 'center', borderWidth: 4, borderColor: 'red', marginBottom: 10}}/>
            <View style={{
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 8,
                overflow: 'hidden',
                marginVertical: 10,
            }}>
                <Picker onValueChange={(value) => {setq3(value)}} style={{ color: 'deepskyblue', borderColor:'white' }} dropdownIconColor="deepskyblue">
                    <Picker.Item label="Choose an agent" value="" enabled={false} />
                    <Picker.Item label="Jett" value= "Jett"></Picker.Item>
                    <Picker.Item label="Reyna" value= "Reyna"></Picker.Item>
                    <Picker.Item label="Raze" value= "Raze"></Picker.Item>
                    <Picker.Item label="Neon" value= "Neon"></Picker.Item>
                </Picker>
            </View>


            <QuizQuestion
                question='Who is this?'
            />
            <Image source={{uri:'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/37ea1466beebb54aad4f16efbad184566cb80368-616x822.png?'}} style={{width:385, height: 513.75, alignSelf: 'center', borderWidth: 4, borderColor: 'red', marginBottom: 10}}/>
            <View style={{
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 8,
                overflow: 'hidden',
                marginVertical: 10,
            }}>
                <Picker onValueChange={(value) => {setq4(value)}} style={{ color: 'deepskyblue', borderColor:'white' }} dropdownIconColor="deepskyblue">
                    <Picker.Item label="Choose an agent" value="" enabled={false} />
                    <Picker.Item label="Gekko" value= "Gekko"></Picker.Item>
                    <Picker.Item label="Fade" value= "Fade"></Picker.Item>
                    <Picker.Item label="Skye" value= "Skye"></Picker.Item>
                    <Picker.Item label="KAY/O" value= "KAY/O"></Picker.Item>
                </Picker>
            </View>


            <TouchableOpacity
                style={{marginBottom: 20, margin: 10, backgroundColor: 'deepskyblue', height: 50, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}
                onPress={() => {
                    let score = 0;

                    if (q1 === 'Brimstone') score += 1;
                    if (q2 === 'Deadlock') score += 1;
                    if (q3 === 'Neon') score += 1;
                    if (q4 === 'Skye') score += 1;

                    let total = 4;
                    let percentage = (score / total) * 100;

                    let message = '';
                    if (score === 4) {
                        message = "Perfect! You got them all!";
                    } else if (score === 3) {
                        message = "Almost there! Great job!";
                    } else if (score === 2) {
                        message = "Not bad, keep practicing!";
                    } else if (score === 1) {
                        message = "You can do better next time!";
                    } else {
                        message = "Oops! Try again!";
                    }

                    Alert.alert(`Score: ${score}/${total}`, `${message}\nYou got ${percentage}% correct!`);
                }}
            >
                <Text style={{fontSize: 20}}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

export default QuizApp;