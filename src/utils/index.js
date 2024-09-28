"use strict";
import {
  ServerEvent as _ServerEvent,
  EventRequest as _EventRequest,
  UserData as _UserData,
  CustomData as _CustomData,
  Content as _Content,
  FacebookAdsApi,
} from "facebook-nodejs-business-sdk";

const access_token = import.meta.env.VITE_API_FB_TOKEN;
const pixel_id = 1252670935756051;
const api = FacebookAdsApi.init(import.meta.env.VITE_API_FB_TOKEN);

let current_timestamp = Math.floor(new Date() / 1000);

export const userData_0 = new _UserData()
  .setEmails([])
  .setPhones([])
  .setLastNames([])
  .setFirstNames([]);
const serverEvent_0 = new _ServerEvent()
  .setEventName("CompleteRegistration")
  .setEventTime(1727197461)
  .setUserData(userData_0)
  .setCustomData(_CustomData)
  .setActionSource("website");

const eventsData = [serverEvent_0];
const eventRequest = new eventRequest(access_token, pixel_id).setEvents(
  eventsData
);
eventRequest.execute();
