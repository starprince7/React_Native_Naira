//
//  RNNairaModule.swift
//  RNNairaModule
//
//  Copyright © 2022 Prince A.Nweke <princeagezinweke@gmail.com> (princenweke.com). All rights reserved.
//

import Foundation

@objc(RNNairaModule)
class RNNairaModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
