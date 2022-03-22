import React, {useState} from 'react';
import Tile from '@hig/tile';
import Spacer from "@hig/spacer";
import Dropdown from "@hig/dropdown";
import Label from "@hig/label";
import Badge from "@hig/badge";

import { Alert16, Complete16, Download16, Edit16, MoreVertical16, Alert24, Complete24, Download24, Edit24, MoreVertical24, FileImage16, FileImage24} from "@hig/icons"

import ImageHolder from '../fixtures/tile/ImageHolder';
import ThemeRepeater from '../components/ThemeRepeater';
import "../TilePage.css";

const Size12Icon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 6C0.75 3.10051 3.10051 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 8.8995 8.8995 11.25 6 11.25C3.10051 11.25 0.75 8.8995 0.75 6ZM2.895 6.8625L5.3475 8.925L9.0975 4.0725L8.25 3.42L5.1825 7.3875L3.585 6.0375L2.895 6.8625Z" fill="black"/>
  </svg>
);

function TilePage() {
  const [orientation, setOrientation] = useState("vertical");
  const [background, setBackground] = useState("solid");
  const [divider, setDivider] = useState(false);
  const getDivider = colorSchemeId => colorSchemeId?.includes("light") ? "#1a1f25" : "white";
  const [version, setVersion] = useState(false);
  const getVersion = isMediumDensity => isMediumDensity ? <Badge size="l" variant="text" label="V1" /> : <Badge size="s" variant="text" label="V1" />;
  const [identifier, setIdentifier] = useState(false);
  const getIdentifier = isMediumDensity => isMediumDensity ? <FileImage24 /> : <FileImage16 />;
  const getStatusAndActionIcons = isMediumDensity => [
    {type: 'status', icon: isMediumDensity ? <Alert24 /> : <Alert16 />}, 
    {type: 'status', icon: isMediumDensity ? <Complete24 /> : <Complete16 />}, 
    {type: 'action', icon: isMediumDensity ? <Edit24 /> : <Edit16 />, action: () => {console.log('testing download')}}, 
    {type: 'action', icon: isMediumDensity ? <Download24 /> : <Download16 />, action: () => {console.log('testing edit')}}
  ];
  const [status, setStatus] = useState(false);
  const getNotification = isMediumDensity => ({type: 'pill', component: isMediumDensity ? <Badge size="l" icon={<Complete16 />} variant="icon" /> : <Badge size="s" icon={<Size12Icon />} variant="icon" />});
  const [notification, setNotification] = useState(false);
  const tooltip = 'click here';
  const getOverflowMenu = isMediumDensity => isMediumDensity ? <MoreVertical24 /> : <MoreVertical16 />; 
  const [overflow, setOverlfow] = useState(false);
  const getCTA = () => ({type: 'button', text: 'click here', action: () => {console.log('testing click')}});
  const [cta, setCTA] = useState(false);
  const getActionClarifier = () => 'CTA';
  const [actionClarifier, setActionClarifier] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [disabled, setDisable] = useState(false);

  const onKeyDown = () => {
    console.log('from tile page KEYDOWN');
  }

  const onFocus = () => {
    console.log('from tile page FOCUS');
  }

  const onBlur = () => {
    console.log('from tile page BLUR');
  }

  return (
    <div className="tile-wrapper">
      <div className="tile-left-nav">
        <Label variant="top">Orientation</Label>
        <Dropdown
          defaultValue='vertical'
          onChange={(value) => {
            switch(value) {
              case 'vertical':
                setOrientation('vertical');
                break;
              case 'horizontal':
              default:
                setOrientation('horizontal');
                break;
            }
          }}
          options={[
            'vertical',
            'horizontal',
          ]}
        />
        <Label variant="top">Background</Label>
        <Dropdown
          defaultValue='solid'
          onChange={(value) => {
            switch(value) {
              case 'solid':
                setBackground('solid');
                break;
              case 'flat':
              default:
                setBackground('flat');
                break;
            }
          }}
          options={[
            'solid',
            'flat',
          ]}
        />
        <Label variant="top">Divider</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setDivider(true);
                break;
              case 'false':
              default:
                setDivider(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Disabled</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setDisable(true);
                break;
              case 'false':
              default:
                setDisable(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Optional Properties</Label>
        <Spacer spacing="m" />
        <Label variant="top">Version</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setVersion(true);
                break;
              case 'false':
              default:
                setVersion(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Identifier Icon</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setIdentifier(true);
                break;
              case 'false':
              default:
                setIdentifier(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Status Icon</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setStatus(true);
                break;
              case 'false':
              default:
                setStatus(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Notification</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setNotification(true);
                break;
              case 'false':
              default:
                setNotification(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Overflow menu</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setOverlfow(true);
                break;
              case 'false':
              default:
                setOverlfow(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Call to Action</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setCTA(true);
                break;
              case 'false':
              default:
                setCTA(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Action Clarifier</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setActionClarifier(true);
                break;
              case 'false':
              default:
                setActionClarifier(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Spacer spacing="m" />
        <Label variant="top">Show Checkbox</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setShowCheckbox(true);
                break;
              case 'false':
              default:
                setShowCheckbox(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
        <Label variant="top">Show Pin Icon</Label>
        <Dropdown
          defaultValue='false'
          onChange={(value) => {
            switch(value) {
              case 'true':
                setShowPin(true);
                break;
              case 'false':
              default:
                setShowPin(false);
                break;
            }
          }}
          options={[
            'true',
            'false',
          ]}
        />
      </div>
      <ThemeRepeater>{({id, level, theme}) => {
        const isMediumDensity = theme.metadata.densityId === `medium-density`;
        return (
          <>
            <Tile 
              headerContainer={ImageHolder}
              background={background}
              divider={divider ? getDivider(theme?.metadata?.colorSchemeId) : null}
              title="Tile Title"
              subtitle="Tile SubTitle"
              orientation={orientation}
              version={version ? getVersion(isMediumDensity) : null}
              identifier={identifier ? getIdentifier(isMediumDensity) : null}
              statusAndActionIcons={status ? getStatusAndActionIcons(isMediumDensity) : null}
              notification={notification ? getNotification(isMediumDensity) : null}
              tooltip={tooltip}
              overflowMenu={overflow ? getOverflowMenu(isMediumDensity) : null}
              cta={cta ? getCTA() : null}
              actionClarifier={actionClarifier ? getActionClarifier() : null}
              showCheckbox={showCheckbox}
              showPin={showPin}
              surface={level}
              disabled={disabled}
              onKeyDown={onKeyDown}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </>
        )
      }}</ThemeRepeater>
    </div>
  );
}

export default TilePage;
