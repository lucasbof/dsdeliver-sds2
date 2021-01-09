import React, { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

const Orders = () => {
    
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    
    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then(response => {
                setOrders(response.data);
            })
            .catch(() => Alert.alert('Houve um erro ao buscar os pedidos'))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        if(isFocused) {
            fetchData();
        }
    }, [isFocused]);

    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', { order });
    }

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading && (
                    <Text style={styles.loadingMessage}>Buscando pedidos...</Text>
                )}
                {!isLoading && (
                    orders.map(order => (
                        <TouchableWithoutFeedback 
                            key={order.id} 
                            onPress={() => { handleOnPress(order) }}
                        >
                            <OrderCard order={order} />
                        </TouchableWithoutFeedback>
                    ))
                )}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    loadingMessage: {
        textAlign: 'center',
        marginTop: 300,
        fontSize: 20,
        fontWeight: '700',
        borderRadius: 10,
        color: '#fff',
        backgroundColor: '#dc3545'
    }
});

export default Orders;