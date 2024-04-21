"use client";
import React from "react";
import { Box, Card, Flex, Inset, Strong, Text } from "@radix-ui/themes";

import { TrailerDialog } from "./trailer-dailog";
import { EditDialog } from "./edit/edit-dialog";

type Props = {
  movie: any;
};

export const MovieCard = ({ movie }: Props) => {
  return (
    <Box maxWidth="240px">
      <Card size="2" className="relative">
        <Inset clip="padding-box" side="top" pb="current">
          <EditDialog movie={movie} />
        </Inset>
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          gap={"2"}
        >
          <Text as="p" size="2" className="whitespace-nowrap">
            <Strong>{movie.title}</Strong>
          </Text>

          <TrailerDialog movie={movie} />
        </Flex>
      </Card>
    </Box>
  );
};
