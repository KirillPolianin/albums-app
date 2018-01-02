import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// import { StyleSheet, Text, View } from 'react-native';

const App = () => {
	return (
		<View style={{ flex: 1 }}>
			<Header headerText={'Albums'} />
			<AlbumList />
		</View>
	);
};

export default App;
