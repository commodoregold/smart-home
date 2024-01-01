
const Tab = createNativeStackNavigator();

function MyTabs() {
 return (
  <Stack.Navigator>
   <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{
     title: 'My home',
     headerStyle: {
      backgroundColor: '#f4511e',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
      fontWeight: 'bold',
     },
    }}
   />
  </Stack.Navigator>
 );
}

export default MyTabs;