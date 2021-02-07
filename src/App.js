import { useRef, useState, useEffect } from "react";
import {
  Flex,
  Stack,
  RadioGroup,
  Radio,
  useDisclosure,
  ScaleFade,
  Heading,
  useBreakpointValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  IconButton,
  Text,
  Link,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ChamberGroup from "./components/chamberGroup";
import DivitGroup from "./components/divitGroup";
import useRandomSounds from "./utils/hooks/useRandomSounds";

const difficulties = [
  "easy",
  "regular",
  "medium",
  "hard",
  "extreme",
  "impossible",
];

const spinSpeed = 1;

const App = () => {
  const revolverRef = useRef();
  const [rotation, setRotation] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const { playRandomSound } = useRandomSounds();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isConfirmOpen, onClose: onConfirmClose } = useDisclosure({
    defaultIsOpen: true,
  });
  const isMobile = useBreakpointValue({ base: true, md: false });
  const menuButtonRef = useRef();
  const confirmRef = useRef();

  const handlePlaySound = () => {
    playRandomSound();
  };

  const handleSafe = () => {
    onOpen();
    setTimeout(() => onClose(), 1500);
  };

  const handleCheckWin = (rotation) => {
    const baseRotation = rotation % 360;
    switch (difficulty) {
      case 5:
        return handlePlaySound();
      case 4:
        if (baseRotation === 120) {
          return handlePlaySound();
        }
      case 3:
        if (baseRotation === 180) {
          return handlePlaySound();
        }
      case 2:
        if (baseRotation === 240) {
          return handlePlaySound();
        }
      case 1:
        if (baseRotation === 300) {
          return handlePlaySound();
        }
      case 0:
        if (baseRotation === 0) {
          return handlePlaySound();
        } else {
          return handleSafe();
        }
      default:
        handleSafe();
    }
  };

  const play = () => {
    let randomSpin =
      Math.ceil((Math.floor(Math.random() * 720) + 720) / 60) * 60;
    let newRotation = rotation + randomSpin;
    setRotation(newRotation);
    revolverRef.current.style.transform = `rotateZ(${newRotation}deg)`;
    setTimeout(() => handleCheckWin(newRotation), spinSpeed * 1000);
  };

  const renderDifficultySettings = (props) => (
    <RadioGroup
      onChange={(v) => {
        setDifficulty(parseInt(v, 10));
        menuButtonRef.current?.click();
      }}
      value={`${difficulty}`}
      {...props}
    >
      <Stack>
        {difficulties.map((d, i) => (
          <Radio value={`${i}`}>{d}</Radio>
        ))}
      </Stack>
    </RadioGroup>
  );

  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flex={1}
        width={"100%"}
      >
        {!isMobile ? (
          renderDifficultySettings({
            position: "absolute",
            zIndex: 1,
            top: 30,
            right: 30,
          })
        ) : (
          <Popover>
            <PopoverTrigger>
              <IconButton
                ref={menuButtonRef}
                icon={<HamburgerIcon />}
                position={"absolute"}
                top={15}
                right={15}
              >
                Trigger
              </IconButton>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverBody>{renderDifficultySettings({})}</PopoverBody>
            </PopoverContent>
          </Popover>
        )}
        <Flex
          width={{ base: "200px", sm: "100%" }}
          height={{ base: "200px", sm: "100%" }}
          maxWidth={"300px"}
          maxHeight={"300px"}
          overflow={"hidden"}
          cursor={"pointer"}
          onClick={play}
        >
          <Flex
            ref={revolverRef}
            width={"100%"}
            height={"100%"}
            borderRadius={"100%"}
            backgroundColor={"gray.500"}
            position={"relative"}
            transition={`transform ${spinSpeed}s ease-out`}
          >
            <Flex position={"absolute"} top={0} bottom={0} left={0} right={0}>
              <DivitGroup />
            </Flex>
            <Flex
              position={"absolute"}
              top={0}
              bottom={0}
              left={0}
              right={0}
              transform={"rotateZ(120deg)"}
            >
              <DivitGroup />
            </Flex>
            <Flex
              position={"absolute"}
              top={0}
              bottom={0}
              left={0}
              right={0}
              transform={"rotateZ(240deg)"}
            >
              <DivitGroup />
            </Flex>
            <Flex
              position={"absolute"}
              top={0}
              bottom={0}
              left={0}
              right={0}
              transform={"rotateZ(30deg)"}
            >
              <ChamberGroup
                leftBullet={difficulty >= 5}
                rightBullet={difficulty >= 2}
              />
            </Flex>
            <Flex
              position={"absolute"}
              top={0}
              bottom={0}
              left={0}
              right={0}
              transform={"rotateZ(150deg)"}
            >
              <ChamberGroup
                leftBullet={difficulty >= 1}
                rightBullet={difficulty >= 4}
              />
            </Flex>
            <Flex
              position={"absolute"}
              top={0}
              bottom={0}
              left={0}
              right={0}
              transform={"rotateZ(270deg)"}
            >
              <ChamberGroup
                leftBullet={difficulty >= 3}
                rightBullet={difficulty >= 0}
              />
            </Flex>
            <Flex
              position={"absolute"}
              top={0}
              bottom={0}
              left={0}
              right={0}
              transform={"rotateZ(270deg)"}
            >
              <Flex
                backgroundColor={"gray.700"}
                width={{ base: "50px", sm: "70px" }}
                height={{ base: "50px", sm: "70px" }}
                borderRadius={"100%"}
                top={"50%"}
                transform={"translate(-50%, -50%)"}
                position={"absolute"}
                left={"50%"}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          position={"absolute"}
          top={0}
          bottom={0}
          left={0}
          right={0}
          zIndex={2}
          alignItems={"center"}
          padding={"30px"}
          justifyContent={"center"}
          pointerEvents={"none"}
        >
          <ScaleFade initialScale={0} in={isOpen}>
            <Heading
              fontSize={{ base: "100px", md: "250px", lg: "500px" }}
              textAlign={"center"}
              textShadow={"text-shadow: 0px 0px 4px rgba(0,0,0,0.5)"}
            >
              Safe
            </Heading>
          </ScaleFade>
        </Flex>
      </Flex>
      <Text
        as={Link}
        isExternal
        href={"https://iamnoah.dev"}
        textAlign={"center"}
      >
        &copy; Noah Richardson {new Date().getFullYear()}
      </Text>
      <AlertDialog
        leastDestructiveRef={confirmRef}
        onClose={onConfirmClose}
        isOpen={isConfirmOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Before you start...</AlertDialogHeader>
          <AlertDialogBody>
            VOLUME WARNING: This game should NOT be played using headphones, as
            the sounds are made to be extremely loud. If you decide to continue,
            any ear damage, roommate annoyance, or getting kicked out of public
            places is on you.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={confirmRef} onClick={onConfirmClose}>
              Got it
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default App;
