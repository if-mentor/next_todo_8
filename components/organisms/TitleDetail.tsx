import { Box, Text, Flex, Button } from "@chakra-ui/react";

const TitleDetail = () => {
  return (
    <Box
      w={"592px"}
      border={"1px"}
      borderRadius={"10px"}
      p={"16px 16px 35px"}
      mt={"8px"}
    >
      <Box mb={"16px"}>
        <Text
          fontSize={"24px"}
          fontWeight={"bold"}
          bg={"#95E3F4"}
          borderBottom={"1px"}
          borderColor={"blackAlpha.400"}
          h={"28px"}
          lineHeight={"28px"}
        >
          TITLE
        </Text>
        <Text fontSize={"20px"} fontWeight={"bold"}>
          Github上に静的サイトをホスティングする
        </Text>
        <Text
          mt={"16px"}
          fontSize={"24px"}
          fontWeight={"bold"}
          bg={"#95E3F4"}
          borderBottom={"1px"}
          borderColor={"blackAlpha.400"}
          h={"28px"}
          lineHeight={"28px"}
        >
          DETAIL
        </Text>
        <Text fontSize={"20px"} fontWeight={"bold"} lineHeight={"1.2"}>
          AWS コンソールで AWS Amplify
          を使って静的ウェブサイトをホスティングします。AWS Amplify
          は、静的ウェブサイトおよびウェブアプリにフルマネージドのホスティングを提供します。Amplify
          のホスティングソリューションは、Amazon CloudFront と Amazon S3
          を使って、AWS コンテンツ配信ネットワーク (CDN)
          を介してサイトアセットを提供します。
          継続的デプロイをセットアップします。Amplify は、継続的デプロイで Git
          ベースのワークフローを提供します。それにより、コードコミットごとに、サイトに自動的に更新をデプロイすることができます。
        </Text>
      </Box>
      <Flex justify={"space-between"} alignItems={"center"} h={'45px'}>
        <Button
          bg={"#95E3F4"}
          w={"112px"}
          borderRadius={"40px"}
          fontSize={"18px"}
        >
          Edit
        </Button>
        <Box>
          <Text fontSize={"16px"} fontWeight={"bold"}>
            Create
          </Text>
          <Text fontSize={"20px"} fontWeight={"bold"}>
            2020-11-8 18:55
          </Text>
        </Box>
        <Box>
          <Text fontSize={"16px"} fontWeight={"bold"}>
            Update
          </Text>
          <Text fontSize={"20px"} fontWeight={"bold"}>
            2020-11-8 18:55
          </Text>
        </Box>
      </Flex>
      <Box />
    </Box>
  );
};

export default TitleDetail;
