import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function InputScreen({ navigation }) {
  const [km, setKm] = useState("");
  const [litros, setLitros] = useState("");

  const handleCalculate = () => {
    const convertToFloat = (value) => {
      return parseFloat(value.replace(",", "."));
    };

    if (!km || !litros) {
      alert("Por favor, insira ambos os valores!");
      return;
    }

    const kmValue = convertToFloat(km);
    const litrosValue = convertToFloat(litros);

    if (isNaN(kmValue) || isNaN(litrosValue) || litrosValue === 0) {
      alert(
        "Por favor, insira valores válidos e certifique-se de que Litros não seja zero!"
      );
      return;
    }

    const media = kmValue / litrosValue;
    navigation.navigate("Resultado", { media });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quilometragem Percorrida (Km):</Text>
      <TextInput
        style={[styles.input, styles.shadow]}
        keyboardType="numeric"
        value={km}
        onChangeText={setKm}
      />
      <Text style={styles.label}>Litros de Gasolina Consumidos:</Text>
      <TextInput
        style={[styles.input, styles.shadow]}
        keyboardType="numeric"
        value={litros}
        onChangeText={setLitros}
      />
      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
