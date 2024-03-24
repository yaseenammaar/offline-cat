import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#F7F7F0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    keyText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3C4047',
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
    },
    actionButton: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    actionButtonText: {
        fontSize: 12,
        marginTop: 5,
    },
    roundButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
      },
      roundButton: {
        width: 50, // Adjust size as needed
        height: 50, // Adjust size as needed
        borderRadius: 25, // Half of the width and height to make it round
        overflow: 'hidden', // Hide the overflow on Android
        elevation: 3, // Optional, adds a drop shadow on Android
        backgroundColor: '#E0E0E0', // Your button color
      }
});
