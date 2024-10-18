import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { Header } from '../../components/Header';
import { colours, globalStyles } from '../../theme/theme';
import { Button } from '../../components/Button';
import axios from 'axios';
import { ScanInterface } from '../../interfaces/ScanInterface';
import { AnalyseInterface } from '../../interfaces/AnalyseInterface';

export const VirusScreen = () => {

    const [url1, useUrl1] = useState('');
    const [url2, useUrl2] = useState('');
    const [resScan, useResScan] = useState({});
    const [resA, useResA] = useState({});

    const validarURL = (url: string) => {

        const regex = /^(https?:\/\/)?([a-z0-9\-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i;

        return regex.test(url);

    }

    const scanURL = async () => {

        const val = validarURL(url1);

        if (val) {
            const formData = new FormData();
            formData.append('url', url1);

            try {
                const response = await axios.post<ScanInterface>('https://www.virustotal.com/api/v3/urls', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'x-apikey': '47f125c0354caf5d21bcaf8f4592f87eb6501aa825bc5e6644693903d1237734',
                    }
                });
                useResScan(response.data.data);
            } catch (error) {
                console.error('Error en la petición:', error);
                useResScan(error);
            }

        } else {
            useResScan('URL no válida')
        }

    }

    const aURL = async () => {

        const val = validarURL(url2);

        if (val) {

            const encodedUrl = encodeURIComponent(url2);
            const base64Url = btoa(encodedUrl);
            const final = base64Url.endsWith('=') ? base64Url.slice(0, -1) : base64Url;

            try {
                const response = await axios.get<AnalyseInterface>(`https://www.virustotal.com/api/v3/urls/${final}`, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'x-apikey': '47f125c0354caf5d21bcaf8f4592f87eb6501aa825bc5e6644693903d1237734',
                    }
                });
                useResA(response.data.data);
            } catch (error) {
                console.error('Error en la petición:', error);
                useResA(error);
            }
        } else {
            useResA('URL no válida')
        }

    }

    return (
        <ScrollView style={{ padding: 20 }}>
            <View>
                <Header title='Scan URL' />
                <TextInput
                    style={globalStyles.input}
                    onChangeText={useUrl1}
                    value={url1}
                    keyboardType='url'
                />
                <Button colour={colours.primary} label='Scan' onPress={() => scanURL()} />
                <Text style={{ color: colours.primary }}>{JSON.stringify(resScan, null, "\t")}</Text>
            </View>

            <View style={{ marginTop: 5 }}>
                <Header title='Análisis de URL' />
                <TextInput
                    style={globalStyles.input}
                    onChangeText={(e) => useUrl2(e)}
                    value={url2}
                    keyboardType='url'
                />
                <Button colour={colours.primary} label='Analizar' onPress={() => aURL()} />
                <Text style={{ color: colours.primary }}>{JSON.stringify(resA, null, "\t")}</Text>
            </View>
        </ScrollView>
    )

}
