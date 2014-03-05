// This file was autogenerated by /Users/OrgaChem/Sites/closure/library/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../../../../doji-auth/development/js_dev/main.js', ['main'], ['sia.App']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/auth/authhelper.js', ['sia.auth.AuthenticationHelper'], ['goog.asserts']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/debug/debug.js', ['sia.debug'], []);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/events/keyhandler.js', ['sia.events.KeyEdgeTriggerHandler', 'sia.events.KeyEdgeTriggerHandler.EventType'], ['goog.events.EventHandler', 'goog.events.EventTarget', 'goog.events.EventType', 'goog.events.KeyHandler']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/events/touchhandler.js', ['sia.events.TouchEnterLeaveHandler', 'sia.events.TouchHandler'], ['goog.events.EventHandler', 'goog.events.EventTarget', 'goog.structs.Map', 'goog.structs.Set']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/modes/modes.js', ['sia.modes', 'sia.modes.ConfirmingMode', 'sia.modes.Mode', 'sia.modes.ModeType', 'sia.modes.PresettingMode', 'sia.modes.PretestingMode', 'sia.modes.SettingMode', 'sia.modes.TestingMode'], ['goog.debug.LogManager', 'sia.ui.ControlPanel.ButtonMsg', 'sia.ui.ControlPanel.SymbolType']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/secrets/combinationalsymbols.js', ['sia.secrets.CombinationalSymbols'], ['goog.array', 'goog.asserts', 'goog.structs.Set', 'sia.secrets.VirtualSymbol', 'sia.secrets.resolveSet']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/secrets/virtualsymbols.js', ['sia.secrets.VirtualSymbol', 'sia.secrets.resolveSet'], ['goog.array', 'goog.asserts', 'goog.structs', 'goog.structs.Map']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/sia.js', ['sia.App'], ['goog.asserts', 'goog.debug.Console', 'goog.debug.LogManager', 'goog.debug.Logger', 'goog.debug.Logger.Level', 'goog.dom', 'goog.dom.DomHelper', 'goog.events.EventHandler', 'goog.json', 'goog.structs.Map', 'goog.ui.Component', 'sia.auth.AuthenticationHelper', 'sia.debug', 'sia.modes.ConfirmingMode', 'sia.modes.ModeType', 'sia.modes.PresettingMode', 'sia.modes.PretestingMode', 'sia.modes.SettingMode', 'sia.modes.TestingMode', 'sia.ui.AppInterface', 'sia.ui.ControlPanel', 'sia.ui.ControlPanel.EventType', 'sia.ui.Keypad.EventType']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/ui/appinterface.js', ['sia.ui.AppInterface'], ['goog.ui.Component', 'sia.ui.Indicator', 'sia.ui.Keypad']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/ui/backspacekey.js', ['sia.ui.BackspaceKey', 'sia.ui.BackspaceKeyRenderer'], ['goog.events.KeyCodes', 'goog.ui.ButtonRenderer', 'goog.ui.registry', 'sia.debug', 'sia.ui.Key']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/ui/controlpanel.js', ['sia.ui.ControlPanel', 'sia.ui.ControlPanel.ButtonMsg', 'sia.ui.ControlPanel.EventType', 'sia.ui.ControlPanel.SymbolType'], ['goog.debug.LogManager', 'goog.dom', 'goog.dom.classes', 'goog.object', 'goog.style', 'goog.ui.Button', 'goog.ui.Component.EventType', 'goog.ui.Control', 'goog.ui.NativeButtonRenderer', 'sia.debug']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/ui/indicator.js', ['sia.ui.Indicator'], ['goog.ui.ProgressBar', 'sia.secrets.CombinationalSymbols']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/ui/key.js', ['sia.ui.Key'], ['goog.debug.LogManager', 'goog.dom.ViewportSizeMonitor', 'goog.events.Event', 'goog.events.EventHandler', 'goog.events.EventType', 'goog.events.KeyCodes', 'goog.functions', 'goog.math.Rect', 'goog.style', 'goog.ui.Button', 'goog.ui.ButtonRenderer', 'goog.ui.Component.EventType', 'goog.ui.registry', 'sia.debug', 'sia.events.KeyEdgeTriggerHandler', 'sia.events.KeyEdgeTriggerHandler.EventType']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/ui/keypad.js', ['sia.ui.Keypad', 'sia.ui.Keypad.EventType', 'sia.ui.KeypadRenderer'], ['goog.Timer', 'goog.debug.LogManager', 'goog.dom', 'goog.dom.classes', 'goog.dom.dataset', 'goog.events.EventType', 'goog.math.Coordinate', 'goog.structs', 'goog.ui.Component', 'goog.ui.Container', 'goog.ui.ContainerRenderer', 'goog.ui.registry', 'sia.debug', 'sia.secrets.CombinationalSymbols', 'sia.ui.BackspaceKey', 'sia.ui.NumericalKey', 'sia.ui.VirtualSymbolKey']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/ui/numerickey.js', ['sia.ui.NumericalKey', 'sia.ui.NumericalKeyRenderer'], ['goog.events.KeyCodes', 'goog.string', 'goog.ui.ButtonRenderer', 'goog.ui.registry', 'sia.ui.SymbolKey']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/ui/symbolkey.js', ['sia.ui.SymbolKey'], ['sia.ui.Key']);
goog.addDependency('../../../../doji-auth/development/js_dev/sia/ui/virtualsymbolkey.js', ['sia.ui.VirtualSymbolKey', 'sia.ui.VirtualSymbolKeyRenderer'], ['goog.events.KeyCodes', 'goog.ui.ButtonRenderer', 'goog.ui.registry', 'sia.secrets.VirtualSymbol', 'sia.ui.SymbolKey']);
