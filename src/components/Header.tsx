import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header(){
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            {/* LOGO */}
            <Text fontSize="3xl" fontWeight={"bold"} letterSpacing="tight" w="64">
                dashgo
                <Text color="pink.500" as="span" ml="1">.</Text>
            </Text>

            {/* INPUT DE PESQUISA */}
            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input
                    color="gray.50"
                    variant={"unstyled"}
                    px="4"
                    mr="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{color: 'gray.400'}}
                ></Input>

                <Icon as={RiSearchLine} fontSize="20"></Icon>
            </Flex>

            {/* ICONES E PERFIL DE USUÁRIO */}
            <Flex
                align="center"
                ml="auto"
            >
                {/* ICONES */}
                <HStack 
                    spacing="8"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20"></Icon>
                    <Icon as={RiUserAddLine} fontSize="20"></Icon>
                </HStack>

                {/* PERFIL DE UISUÁRIO */}
                <Flex align="center">
                    <Box mr="4" textAlign={"right"}>
                        <Text>Matheus de Souza</Text>
                        <Text color="gray.300" fontSize={"small"}>matheusdesouza078@gmail.com</Text>
                    </Box>

                    <Avatar size="md" name="Matheus de Souza"></Avatar>
                </Flex>
            </Flex>
        </Flex>    
    );
}