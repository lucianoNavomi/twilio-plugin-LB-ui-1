import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import LbTodoListTaskComponent from './components/LbTodoListTaskComponent/LbTodoListTaskComponent';
import LbCustomThemeOverrides from './LbCustomThemeOverrides';

import reducers, { namespace } from './states';

const PLUGIN_NAME = 'LbUi1Plugin';

export default class LbUi1Plugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    manager.updateConfig({
      colorTheme: {
        baseName: "FlexLight",
        overrides: LbCustomThemeOverrides
      }
    });

    manager.strings.NoTasks = "No tasks, make some coffee!";

    // TODO Component
    flex.TaskInfoPanel.Content.add(
      <LbTodoListTaskComponent key="todo-list" />,
      {
        sortOrder: -1,
      }
    )

    // hide the CRM Panel
    // flex.AgentDesktopView.defaultProps.showPanel2 = false;

    // add BING as URL to CRM Panel
    flex.CRMContainer
      .defaultProps
      .uriCallback = (task) => task
        ? `https://www.bing.com/search?q=${task.attributes.name}`
        : "http://bing.com/";

    // Set NAVOMI logo on FLEX UI
    flex.MainHeader
      .defaultProps
      .logoUrl = "https://navomi.com/wp-content/uploads/2017/05/logo1.png";


    this.registerReducers(manager);

    const options = { sortOrder: -1 };
    flex.AgentDesktopView
      .Panel1
      .Content
      .add(<CustomTaskListContainer key="LbUi1Plugin-component" />, options);

  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
