import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, IconButton, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";

export default function UsersList() {

    const [page, setPage] = useState(1);
    const { data, isLoading, isFetching, error } = useUsers(page)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários

                            {!isLoading && isFetching && <Spinner size="sm" color="gary.500" ml="4" />}
                        </Heading>

                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                                cursor="pointer"
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    {
                        isLoading ? (
                            <Flex justify="center">
                                <Spinner />
                            </Flex>
                        ) : error ? (
                            <Flex justify="center">
                                <Text color="red">Falha ao obter os dados dos usuários.</Text>
                            </Flex>
                        ) : (
                            <>
                                <Table colorScheme="whiteAlpha">
                                    <Thead>
                                        <Tr>
                                            <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                                <Checkbox colorScheme="pink" />
                                            </Th>
                                            <Th>Usuário</Th>
                                            {isWideVersion && <Th>Data de cadastro</Th>}
                                            <Th width="8"></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {data.users.map((user) => {
                                            return (
                                                <Tr key={user.id}>
                                                    <Td px={["4", "4", "6"]}>
                                                        <Checkbox colorScheme="pink" />
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Text fontWeight="bold">{user.name}</Text>
                                                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                                        </Box>
                                                    </Td>
                                                    {isWideVersion && <Td>{user.createdAt}</Td>}
                                                    <Td>
                                                        <IconButton
                                                            aria-label="Editar usuário"
                                                            icon={<Icon as={RiPencilLine} fontSize="16" />}
                                                            as="a"
                                                            size="sm"
                                                            fontSize="sm"
                                                            colorScheme="purple"
                                                            cursor="pointer"
                                                        />

                                                    </Td>
                                                </Tr>
                                            )
                                        })}
                                    </Tbody>
                                </Table>

                                <Pagination 
                                    totalCountOfRegisters={data.totalCount}
                                    currentPage={page}
                                    onPageChange={setPage}
                                />
                            </>
                        )
                    }

                </Box>
            </Flex>
        </Box>
    );
}