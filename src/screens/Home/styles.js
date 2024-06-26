import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Black',
    lineHeight: 21,
  },
  heading: {
    fontWeight: '500',
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Black',
    lineHeight: 24,
  },
  icon: {
    height: 56,
    width: 56,
    backgroundColor: '#3A3940',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentTypeView: {
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#3A3940',
  },
  contentType: {
    flexDirection: 'row',
    gap: 10,
    paddingTop: 24,
    flexWrap: 'wrap',
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#616066',
  },
  dropDownBox: {
    height: 56,
    backgroundColor: '#3A3940',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginHorizontal: 1,
  },
  dropDownList: {
    position: 'absolute',
    width: '100%',
    top: 110,
    maxHeight: 166,
    backgroundColor: '#1E1D25',
    borderRadius: 12,
  },
  profile: {
    height: 42,
    width: 42,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  slider: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 53,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginVertical: 32,
    position: 'relative',
  },
  next: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ffff',
    height: 53,
    alignItems: 'center',
    paddingHorizontal: 24,
    borderRadius: 100,
    marginBottom: 100,
  },
  linearColor: {
    height: 60,
    borderRadius: 12,
    marginTop: 16,
    justifyContent: 'center',
    borderWidth: 1,
    width: '100%',
  },
  alphabetLimiter: {
    backgroundColor: '#523FD7',
    width: '100%',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#523FD7',
  },
  profileEditIcon: {
    position: 'absolute',
    bottom: 5,
    right: 0,
    height: 12,
    width: 12,
    backgroundColor: '#B139FF',
    borderRadius: 100,
    alignItems: 'center',
  },
  profileImageView: {
    margin: 20,
    position: 'relative',
  },

  fontWeight: {
    fontWeight: '500',
  },
  container: {
    flex: 1,
    backgroundColor: '#12111A',
  },
});
