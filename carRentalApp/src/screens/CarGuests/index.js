import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const CarGuestScreen = props => {
  const [seats, setSeats] = useState(0);
  const [doors, setDoors] = useState(0);
  const [windows, setWindows] = useState(0);

  return (
    <View>
      {/* Row 1: Seats */}
      <View style={styles.row}>
        {/* Titles  */}
        <View>
          <Text style={{fontWeight: 'bold'}}>Seats</Text>
          <Text style={{color: '#8d8d8d'}}>Max of 10 seats</Text>
        </View>
        {/* Buttons with value */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* - */}
          <Pressable
            onPress={() => setSeats(Math.max(0, seats - 1))}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          {/* value */}
          <Text style={{fontSize: 18, marginHorizontal: 20}}>{seats}</Text>

          {/* + */}
          <Pressable
            onPress={() => setSeats(Math.min(seats + 1, 10))}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        {/* Titles  */}
        <View>
          <Text style={{fontWeight: 'bold'}}>Doors</Text>
          <Text style={{color: '#8d8d8d'}}>Max of 6 doors</Text>
        </View>
        {/* Buttons with value */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* - */}
          <Pressable
            onPress={() => setDoors(Math.max(0, doors - 2))}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          {/* value */}
          <Text style={{fontSize: 18, marginHorizontal: 20}}>{doors}</Text>

          {/* + */}
          <Pressable
            onPress={() => setDoors(Math.min(doors + 2, 6))}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        {/* Titles  */}
        <View>
          <Text style={{fontWeight: 'bold'}}>Windows</Text>
          <Text style={{color: '#8d8d8d'}}>Max of 8 windows</Text>
        </View>
        {/* Buttons with value */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* - */}
          <Pressable
            onPress={() => setWindows(Math.max(0, windows - 2))}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          {/* value */}
          <Text style={{fontSize: 18, marginHorizontal: 20}}>{windows}</Text>

          {/* + */}
          <Pressable
            onPress={() => setWindows(Math.min(windows + 2, 8))}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CarGuestScreen;
