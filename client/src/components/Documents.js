import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Define styles for the PDF document
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: "10% 15%",
    },
    section: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        // textAlign: 'center',
        textTransform: 'uppercase',
        color: 'black',
        textDecoration: 'underline',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        // textAlign: 'justify',
        lineHeight: 1.5,
    },
    text: {
        fontSize: 10,
        marginBottom: 5,
        textAlign: 'justify',
        lineHeight: 1.5,
    },
    warning: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        color: 'red',
    },
    boldText: {
        fontWeight: 'bold',
    },
});

// Function to generate the PDF document
const Documents = ({ finalData }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>{finalData?.modern_name}</Text>
                    {finalData?.ayurvedic_names?.map((item, index) => (
                        <Text key={index} style={styles.subtitle}>{item}</Text>
                    ))}
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>DESCRIPTION</Text>
                    <Text style={styles.text}>{finalData?.description}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>DOSHIC IMBALANCE</Text>
                    <Text style={styles.text}><Text style={styles.boldText}>Primary:</Text> {finalData?.doshic_imbalance?.primary}</Text>
                    <Text style={styles.text}><Text style={styles.boldText}>Secondary:</Text> {finalData?.doshic_imbalance?.secondary?.join(', ')}</Text>
                </View>
                <View style={styles.section}>
                    {finalData?.warning === undefined ? (
                        <View>
                            <Text style={styles.title}>FORMULATIONS ({finalData?.formulations?.length})</Text>
                            {finalData?.formulations?.map((item, index) => (
                                <View key={index} style={styles.section}>
                                    <Text style={styles.subtitle}>Name: {item?.name}</Text>
                                    <Text style={styles.text}>Common Name: {item?.common_name}</Text>
                                    <Text style={styles.text}>
                                        Rasa Guna Virya Vipaka: {Object.entries(item?.rasa_guna_virya_vipaka || {}).map(([key, value]) => `${key}: ${value}`).join(', ')}
                                    </Text>
                                    <Text style={styles.text}>Contraindications: {item?.contraindications?.join(', ')}</Text>
                                </View>
                            ))}
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.warning}>WARNING:</Text>
                            <Text style={styles.text}>{finalData?.warning}</Text>
                        </View>
                    )}
                </View>
            </Page>
        </Document>
    );
};

export default Documents;