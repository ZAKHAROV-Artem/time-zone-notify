import { Pressable, Text } from "react-native";

import { decrement, increment } from "~/store/slices/counter";
import { useDispatch, useSelector } from "~/store/hooks";
import { SafeArea } from "~/components/layout";

type RemaindersScreenProps = {};
export default function RemaindersScreen({}: RemaindersScreenProps) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <SafeArea className="flex-row items-center justify-center">
      <Pressable
        onPress={() => dispatch(increment())}
        className="rounded-lg bg-red-500 p-3"
      >
        <Text>+</Text>
      </Pressable>
      <Text>{count}</Text>
      <Pressable
        onPress={() => dispatch(decrement())}
        className="rounded-lg bg-red-500 p-3"
      >
        <Text>-</Text>
      </Pressable>
    </SafeArea>
  );
}
