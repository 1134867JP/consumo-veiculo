import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Rect, Text as SvgText, Path } from "react-native-svg";

const screenWidth = Dimensions.get("window").width;

const ResultScreen = ({ route }) => {
  const { media } = route.params;

  let classificacao = "";
  let progresso = 0;
  let classificacaoLabel = "";
  let barColors = ["green", "lightgreen", "yellow", "orange", "red"];

  if (media >= 12) {
    classificacao = "A";
    progresso = 1;
    classificacaoLabel = "Excelente";
  } else if (media >= 10) {
    classificacao = "B";
    progresso = 0.8;
    classificacaoLabel = "Muito Bom";
  } else if (media >= 8) {
    classificacao = "C";
    progresso = 0.6;
    classificacaoLabel = "Bom";
  } else if (media >= 4) {
    classificacao = "D";
    progresso = 0.4;
    classificacaoLabel = "Regular";
  } else {
    classificacao = "E";
    progresso = 0.2;
    classificacaoLabel = "Ruim";
  }

  // Define a largura e a altura das barras
  const barWidth = 50;
  const barHeight = 200;
  const barSpacing = 20;
  const classifications = ["A", "B", "C", "D", "E"];

  // Encontra o índice da classificação atual
  const classificationIndex = classifications.indexOf(classificacao);
  const arrowX = (barWidth + barSpacing) * classificationIndex + barWidth / 2;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Média de Consumo: {media.toFixed(2)} Km/L</Text>
      <Text style={styles.text}>Classificação: {classificacao}</Text>
      <View style={styles.chartContainer}>
        <Svg height="30" width={screenWidth}>
          <Path
            d={`M${arrowX - 10},-10 L${arrowX},20 L${
              arrowX + 10
            },-10 L${arrowX},10 Z`}
            fill="#6200ee"
            stroke="#6200ee"
            strokeWidth="2"
          />
        </Svg>
        <Svg height="250" width={screenWidth}>
          {classifications.map((label, index) => (
            <React.Fragment key={label}>
              <Rect
                x={(barWidth + barSpacing) * index}
                y={
                  barHeight - (barHeight / classifications.length) * (index + 1)
                }
                width={barWidth}
                height={(barHeight / classifications.length) * (index + 1)}
                fill={barColors[index]}
              />
              <SvgText
                x={(barWidth + barSpacing) * index + barWidth / 2}
                y={barHeight + 30}
                fontSize="16"
                textAnchor="middle"
              >
                {label}
              </SvgText>
            </React.Fragment>
          ))}
        </Svg>
      </View>
      <Text style={styles.classificacaoLabel}>{classificacaoLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
  chartContainer: {
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingTop: 100,
    marginTop: 20,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginLeft: 10,
    marginRight: "auto",
  },
  classificacaoLabel: {
    fontSize: 16,
    marginTop: 10,
    color: "#6200ee",
    textAlign: "center",
  },
});

export default ResultScreen;
