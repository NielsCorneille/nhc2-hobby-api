import { FanSpeed } from './FanSpeed';
import { PositionState } from './PositionState';

export interface Property {
  Brightness?: string;
  Status?: string;
  Position?: string;
  BasicState?: string;
  FanSpeed?: FanSpeed;
  Moving?: string;
  LastDirection?: PositionState;
}
