import Colors from '../constants/Colors';
import { View, Text } from './Themed';
import { LineGraph, GraphPoint } from 'react-native-graph';
import timeseries from '@/assets/data/timeseries.json';
import { MonoText } from './StyledText';
import { useState } from 'react';

const Graph = () => {
  const points: GraphPoint[] = timeseries.values.map((value) => ({
    date: new Date(value.datetime),
    value: Number.parseFloat(value.close),
  }));

  const [selectedPoint, setSelectedPoint] = useState<GraphPoint>(
    points[points.length - 1]
  );

  const onPointSelected = (point: GraphPoint) => {
    setSelectedPoint(point);
  };

  return (
    <View>
      <MonoText style={{ fontSize: 20, fontWeight: 'bold', color: '#017560' }}>
        ${selectedPoint?.value.toFixed(1)}
      </MonoText>
      <Text style={{ color: 'gray' }}>
        {selectedPoint?.date.toDateString()}
      </Text>

      <LineGraph
        style={{ width: '100%', height: 300 }}
        points={points}
        animated={true}
        color="#017560"
        gradientFillColors={['#0175605D', '#7476df00']}
        enablePanGesture
        onPointSelected={onPointSelected}
        enableIndicator
        indicatorPulsating
        enableFadeInMask
      />
    </View>
  );
};

export default Graph;
