import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import LoadingView from '../LoadingView';
import useList from './useList';
import ListItem from './components/ListItem';
import {LIMIT} from '../../api/constants';
import Box from '../Box';
import {useTheme} from '../../theme/useTheme';

const List = () => {
  const {listDTO, isLoading, onEndReached} = useList();
  const {colors} = useTheme();

  const renderItem = useCallback(({item}) => {
    return <ListItem title={item.name} subtitle={item.category} />;
  }, []);

  const keyExtractor = useCallback(item => item.id, []);

  return (
    <LoadingView isLoading={isLoading && !listDTO.length}>
      <FlatList
        data={listDTO}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        removeClippedSubviews={false}
        initialNumToRender={LIMIT}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        maxToRenderPerBatch={LIMIT}
        ListFooterComponent={
          <Box justifyContent="center" alignItems="center" padding={16}>
            <ActivityIndicator size="small" color={colors.primary} />
          </Box>
        }
      />
    </LoadingView>
  );
};

export default List;
