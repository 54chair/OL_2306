import { useState } from 'react';
import type { ChangeEvent, FC } from 'react';
import { Flex, Stack, Box, Button, Text, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { Layout } from '@/application/UI/Components/layout';
import Link from 'next/link';

// 関数と変数をPresentationalに渡すために型を記述する
interface SignupPreProps {
}

/**
 * Presentational（サインアップ画面のUIを記述する）
 * @returns 
 */
export const SignupPre:FC<SignupPreProps> = () => {
  const initialValues = { email: "", password: "" }
  const [formValues, setFormValues] = useState<SignupPreProps>(initialValues)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
    console.log(formValues);
  }
  return <>
    <Layout title="フォトマ">
      <Flex
        minH="100vh"
        align="center"
        justify="center"
      >
        <Box rounded="lg"
          boxShadow="outline"
          p={10}
          w={600}
        >
          <form>
            <Stack spacing={8}>
              <FormControl>
                <FormLabel>ユーザー名</FormLabel>
                <Input
                  type="text"
                  name="username"
                  placeholder="ユーザー名"
                  onChange={(e) => handleChange(e)} 
                />
              </FormControl>
              <FormControl>
                <FormLabel>メールアドレス</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="メールアドレス"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>パスワード</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="パスワード"
                  onChange={(e) => handleChange(e)}
                 />
              </FormControl>
              <Link href="/signin"><Text color="blue.400" p={1}>ログインへ</Text></Link>
              <Button
                bg="blue.400"
                color="whiteAlpha.900"
                type="submit"
              >新規登録
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Layout>
  </>;
};