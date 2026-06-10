import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F7' }}>
      <ScrollView style={{ padding: 20 }}>
        
        {/* Header */}
        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
          Hello, Roshan 👋
        </Text>
        <Text style={{ color: 'gray', marginBottom: 20 }}>
          Welcome Back
        </Text>

        {/* Balance Card */}
        <View
          style={{
            backgroundColor: '#6A1B9A',
            padding: 20,
            borderRadius: 15,
            marginBottom: 25,
          }}>
          <Text style={{ color: 'white', fontSize: 14 }}>
            Available Balance
          </Text>

          <Text
            style={{
              color: 'white',
              fontSize: 32,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            NPR 25,000
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              alignSelf: 'flex-start',
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderRadius: 8,
            }}>
            <Text style={{ color: '#6A1B9A', fontWeight: 'bold' }}>
              + Add Money
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 15,
          }}>
          Quick Actions
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <ActionButton title="📷 Scan & Pay" />
          <ActionButton title="💸 Send Money" />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 25,
          }}>
          <ActionButton title="💰 Load Wallet" />
          <ActionButton title="🏦 Bank Transfer" />
        </View>

        {/* Services */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 15,
          }}>
          Services
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          <ServiceCard icon="📱" title="Top Up" />
          <ServiceCard icon="💡" title="Electricity" />
          <ServiceCard icon="📶" title="Internet" />
          <ServiceCard icon="🎓" title="Education" />
          <ServiceCard icon="✈️" title="Flight" />
          <ServiceCard icon="🎬" title="Movies" />
        </View>

        {/* Recent Transactions */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 25,
            marginBottom: 15,
          }}>
          Recent Transactions
        </Text>

        <TransactionItem
          title="Scan Payment"
          amount="- NPR 500"
          color="red"
        />

        <TransactionItem
          title="Received Money"
          amount="+ NPR 1,200"
          color="green"
        />

        <TransactionItem
          title="Mobile Recharge"
          amount="- NPR 100"
          color="red"
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'white',
          paddingVertical: 15,
          borderTopWidth: 1,
          borderColor: '#ddd',
        }}>
        <Text style={{ color: '#6A1B9A', fontWeight: 'bold' }}>Home</Text>
        <Text>Scan</Text>
        <Text>History</Text>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
}

const ActionButton = ({ title }: { title: string }) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'white',
      width: '48%',
      padding: 20,
      borderRadius: 12,
      alignItems: 'center',
      elevation: 2,
    }}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

const ServiceCard = ({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'white',
      width: '31%',
      padding: 15,
      borderRadius: 12,
      alignItems: 'center',
      marginBottom: 12,
      elevation: 2,
    }}>
    <Text style={{ fontSize: 24 }}>{icon}</Text>
    <Text style={{ marginTop: 5 }}>{title}</Text>
  </TouchableOpacity>
);

const TransactionItem = ({
  title,
  amount,
  color,
}: {
  title: string;
  amount: string;
  color: string;
}) => (
  <View
    style={{
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      elevation: 1,
    }}>
    <Text>{title}</Text>
    <Text style={{ color, fontWeight: 'bold' }}>{amount}</Text>
  </View>
);