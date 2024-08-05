import { Text, Pressable } from "react-native";

import { SafeArea } from "~/components/layout";
import { useDispatch, useSelector } from "~/store/hooks";
import { decrement, increment } from "~/store/slices/counter";

type RemaindersScreenProps = {};
export default function RemaindersScreen({}: RemaindersScreenProps) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <SafeArea>
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
