import { Box, Menu, Portal, Image } from "@chakra-ui/react";

const DropDownMenu = ({ setIsLoggedIn }) => {
  return (
    <Menu.Root>
      <Menu.Trigger>
        <Image
          src="/images/generic-avatar.png"
          alt="profile-icon"
          cursor="pointer"
        />
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content borderRadius="20px" bg="#F6EEE5" w="140px">
            <Menu.Item color="#D2AC71">My profile</Menu.Item>
            <Menu.Item>Saved bundles</Menu.Item>
            <Menu.Item>Invite friends</Menu.Item>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item
              color="#FF3B30"
              _active={{ color: "#d92318" }}
              onClick={() => setIsLoggedIn(false)}
            >
              Log out
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default DropDownMenu;
